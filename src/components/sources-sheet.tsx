import * as Dialog from "@radix-ui/react-dialog";
import { Download, X } from "lucide-react";
import {
  SERIES_LABEL,
  type AtelierModule,
  type Cut,
} from "@/lib/catalog";
import { Button } from "@/components/ui/button";

type SourcesSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  atelier: AtelierModule;
};

export function SourcesSheet({
  open,
  onOpenChange,
  atelier,
}: SourcesSheetProps) {
  const seriesOrder: Cut["series"][] = ["crystal", "glass"];
  const groups = seriesOrder
    .map((series) => ({
      series,
      ...SERIES_LABEL[series],
      cuts: atelier.cuts.filter((item) => item.series === series),
    }))
    .filter((group) => group.cuts.length > 0);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-background/80 transition-opacity duration-200 data-[state=closed]:opacity-0 data-[state=open]:opacity-100" />
        <Dialog.Content className="fixed inset-x-0 bottom-0 z-50 max-h-screen overflow-y-auto rounded-t-xl border border-border bg-card p-6 pb-10 outline-none md:inset-y-8 md:inset-x-auto md:left-1/2 md:w-full md:max-w-3xl md:-translate-x-1/2 md:rounded-xl md:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="font-display text-3xl italic text-foreground">
                源文件
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-muted-foreground">
                {atelier.title}模块 · 成片、静帧与切割音轨。
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <Button variant="icon" size="iconSm" aria-label="关闭">
                <X className="size-4" />
              </Button>
            </Dialog.Close>
          </div>

          {groups.map((group) => (
            <section key={group.series} className="mb-10">
              <h3 className="mb-3 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                {groups.length > 1 ? `${group.title} · Video` : "Video"}
              </h3>
              <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {group.cuts.map((cut) => (
                  <li
                    key={cut.id}
                    className="relative flex gap-3 overflow-hidden rounded-lg border border-border bg-muted p-3"
                  >
                    <img
                      src={cut.poster}
                      alt=""
                      className="block h-16 w-28 shrink-0 rounded-sm object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm text-foreground">
                        {cut.title}
                        <span className="ml-2 text-muted-foreground">
                          {cut.en}
                        </span>
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground tabular-nums">
                        {cut.duration}s · mp4
                      </p>
                      <a
                        href={cut.src}
                        download={cut.fileName}
                        className="mt-2 inline-flex h-9 items-center gap-1.5 text-xs text-accent hover:opacity-80"
                      >
                        <Download className="size-3.5" />
                        下载成片
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="relative mb-10">
            <h3 className="mb-3 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Stills
            </h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {atelier.stills.map((still) => (
                <li key={still.id} className="min-w-0">
                  <img
                    src={still.src}
                    alt={still.title}
                    className="mb-2 aspect-video w-full rounded-md object-cover"
                  />
                  <p className="text-xs text-foreground">{still.title}</p>
                  <a
                    href={still.src}
                    download={still.fileName}
                    className="mt-1 inline-flex h-9 items-center gap-1.5 text-xs text-accent hover:opacity-80"
                  >
                    <Download className="size-3.5" />
                    下载
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-3 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Audio
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {atelier.cuts.map((cut) => (
                <li
                  key={cut.id}
                  className="flex items-center justify-between rounded-md border border-border px-3 py-2"
                >
                  <span className="text-sm text-foreground">
                    {cut.title}
                    <span className="ml-2 text-xs text-muted-foreground">
                      m4a
                    </span>
                  </span>
                  <a
                    href={cut.audio}
                    download={`${cut.id}.m4a`}
                    className="inline-flex h-9 items-center gap-1.5 text-xs text-accent hover:opacity-80"
                  >
                    <Download className="size-3.5" />
                    音轨
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
