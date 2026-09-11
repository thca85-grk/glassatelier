import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Headphones,
  Pause,
  Play,
  Repeat,
  Volume2,
  VolumeX,
} from "lucide-react";
import {
  MODULES,
  SERIES_LABEL,
  getModule,
  type Cut,
} from "@/lib/catalog";
import { cn, formatTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SourcesSheet } from "@/components/sources-sheet";

export function Studio() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [moduleId, setModuleId] = useState(MODULES[0].id);
  const atelier = getModule(moduleId);
  const [cutId, setCutId] = useState(atelier.cuts[0].id);
  const [unlocked, setUnlocked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [loop, setLoop] = useState(true);
  const [slow, setSlow] = useState(false);
  const [volume, setVolume] = useState(0.88);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(atelier.cuts[0].duration);
  const [sourcesOpen, setSourcesOpen] = useState(false);

  const cut = atelier.cuts.find((item) => item.id === cutId) ?? atelier.cuts[0];

  const grouped = useMemo(() => {
    const order: Cut["series"][] = ["crystal", "glass"];
    return order
      .map((series) => ({
        series,
        ...SERIES_LABEL[series],
        cuts: atelier.cuts.filter((item) => item.series === series),
      }))
      .filter((group) => group.cuts.length > 0);
  }, [atelier]);

  const applyRate = useCallback(() => {
    const video = videoRef.current;
    if (video) video.playbackRate = slow ? 0.75 : 1;
  }, [slow]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.loop = loop;
    video.volume = volume;
    video.muted = muted;
    applyRate();
  }, [loop, volume, muted, applyRate, cutId]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !unlocked) return;
    video.currentTime = 0;
    void video.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, [cutId, unlocked]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) {
        return;
      }
      if (event.key === " " || event.key === "k") {
        event.preventDefault();
        void togglePlay();
      } else if (event.key === "m") {
        setMuted((value) => !value);
      } else if (event.key === "l") {
        setLoop((value) => !value);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unlocked, playing]);

  function selectModule(nextId: string) {
    const next = getModule(nextId);
    setModuleId(next.id);
    setCutId(next.cuts[0].id);
    setUnlocked(false);
    setPlaying(false);
    setCurrentTime(0);
    setDuration(next.cuts[0].duration);
  }

  async function startCut() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setMuted(false);
    video.volume = volume;
    applyRate();
    try {
      await video.play();
      setUnlocked(true);
      setPlaying(true);
    } catch {
      setUnlocked(false);
      setPlaying(false);
    }
  }

  async function togglePlay() {
    if (!unlocked) {
      await startCut();
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  function seek(ratio: number) {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    video.currentTime = Math.min(Math.max(ratio, 0), 1) * video.duration;
  }

  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <header className="flex items-center justify-between gap-4 px-5 py-4 md:px-8">
        <div className="min-w-0">
          <p className="font-display text-3xl italic leading-none text-foreground md:text-4xl">
            晶切
          </p>
          <p className="mt-1 text-xs tracking-[0.28em] uppercase text-muted-foreground">
            Glass Atelier
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={() => setSourcesOpen(true)}>
          源文件
        </Button>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-8 md:px-8">
        <nav className="mb-5 flex flex-wrap items-center gap-2" aria-label="物件模块">
          {MODULES.map((item) => {
            const active = item.id === atelier.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => selectModule(item.id)}
                className={cn(
                  "h-11 rounded-md border px-4 text-sm transition-[border-color,background-color] duration-150",
                  active
                    ? "border-accent bg-muted text-foreground"
                    : "border-border text-muted-foreground hover:border-ring hover:text-foreground",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.title}
                <span className="ml-2 text-xs tracking-[0.16em] uppercase text-muted-foreground">
                  {" "}
                  {item.en}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="mb-4">
          <h1 className="font-display text-3xl italic text-foreground md:text-4xl">
            {atelier.title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {atelier.blurb}
            <span className="ml-2 tabular-nums">
              {atelier.cuts.length} 条成片
            </span>
          </p>
        </div>

        <section className="relative overflow-hidden rounded-xl border border-border bg-card">
          <div className="relative aspect-video overflow-hidden bg-muted">
            <video
              ref={videoRef}
              key={cut.src}
              className="h-full w-full object-cover"
              src={cut.src}
              poster={cut.poster}
              playsInline
              preload="auto"
              loop={loop}
              onTimeUpdate={(event) =>
                setCurrentTime(event.currentTarget.currentTime)
              }
              onLoadedMetadata={(event) =>
                setDuration(event.currentTarget.duration || cut.duration)
              }
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onClick={() => void togglePlay()}
            />

            {!unlocked && (
              <button
                type="button"
                onClick={() => void startCut()}
                className="absolute inset-0 flex flex-col items-center justify-center bg-background/35 px-6 text-center"
                aria-label={`切开这块${cut.title}`}
              >
                <img
                  src={cut.poster}
                  alt=""
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute inset-0 bg-background/40" />
                <span className="relative font-display text-4xl italic text-foreground md:text-7xl">
                  切开
                </span>
                <span className="relative mt-2 text-sm tracking-[0.22em] uppercase text-accent md:mt-3">
                  {cut.en}
                </span>
                <span className="relative mt-4 inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground md:mt-8">
                  <Play className="size-4 fill-current" />
                  播放切割
                </span>
                <span className="relative mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Headphones className="size-3.5" />
                  建议佩戴耳机
                </span>
              </button>
            )}

            {unlocked && !playing && (
              <button
                type="button"
                onClick={() => void togglePlay()}
                className="absolute inset-0 flex items-center justify-center bg-background/25"
                aria-label="继续播放"
              >
                <span className="flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Play className="size-7 fill-current" />
                </span>
              </button>
            )}
          </div>

          <div className="border-t border-border px-4 py-3 md:px-5">
            <button
              type="button"
              className="group relative h-1.5 w-full rounded-full bg-muted"
              aria-label="进度"
              onClick={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                seek((event.clientX - rect.left) / rect.width);
              }}
            >
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-accent"
                style={{ width: `${Math.min(progress, 1) * 100}%` }}
              />
            </button>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Button
                variant="icon"
                size="iconSm"
                onClick={() => void togglePlay()}
                aria-label={playing ? "暂停" : "播放"}
              >
                {playing ? (
                  <Pause className="size-4" />
                ) : (
                  <Play className="size-4 fill-current" />
                )}
              </Button>
              <Button
                variant="icon"
                size="iconSm"
                onClick={() => setMuted((value) => !value)}
                aria-label={muted ? "取消静音" : "静音"}
              >
                {muted ? (
                  <VolumeX className="size-4" />
                ) : (
                  <Volume2 className="size-4" />
                )}
              </Button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={muted ? 0 : volume}
                onChange={(event) => {
                  const next = Number(event.target.value);
                  setVolume(next);
                  if (next > 0) setMuted(false);
                }}
                className="h-11 w-24 accent-accent md:w-32"
                style={{ caretColor: "transparent" }}
                aria-label="音量"
              />
              <span className="text-xs tabular-nums text-muted-foreground">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              <div className="ml-auto flex items-center gap-2">
                <Button
                  variant={loop ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setLoop((value) => !value)}
                  aria-pressed={loop}
                >
                  <Repeat className="size-3.5" />
                  循环
                </Button>
                <Button
                  variant={slow ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setSlow((value) => !value)}
                  aria-pressed={slow}
                >
                  慢放
                </Button>
              </div>
            </div>
          </div>
        </section>

        <p className="mt-5 text-sm text-muted-foreground">{cut.note}</p>

        {grouped.map((group) => (
          <section key={group.series} className="mt-6">
            {grouped.length > 1 ? (
              <h2 className="mb-3 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                {group.title}
                <span className="ml-2"> {group.en}</span>
              </h2>
            ) : null}
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {group.cuts.map((item) => {
                const active = item.id === cut.id;
                return (
                  <li key={item.id} className="min-w-0">
                    <button
                      type="button"
                      onClick={() => setCutId(item.id)}
                      className={cn(
                        "w-full overflow-hidden rounded-lg border text-left transition-[border-color,opacity] duration-150",
                        active
                          ? "border-accent"
                          : "border-border hover:border-ring",
                      )}
                    >
                      <img
                        src={item.poster}
                        alt=""
                        className="aspect-video w-full object-cover"
                      />
                      <span className="flex items-baseline justify-between gap-2 px-3 py-2">
                        <span className="text-sm text-foreground">
                          {item.title}
                        </span>
                        <span className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
                          {item.en}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </main>

      <SourcesSheet
        open={sourcesOpen}
        onOpenChange={setSourcesOpen}
        atelier={atelier}
      />
    </div>
  );
}
