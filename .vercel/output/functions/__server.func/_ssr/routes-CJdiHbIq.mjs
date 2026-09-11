import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Repeat, c as Headphones, l as Download, n as VolumeX, o as Play, r as Volume2, s as Pause, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay, i as DialogDescription, l as Slot, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CJdiHbIq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MODULES = [
	{
		id: "steak",
		title: "牛排",
		en: "Steak",
		blurb: "水晶石英、琥珀玻璃肋眼，与煎玻璃荷包蛋。",
		cover: "/media/crystal-hero.jpg",
		cuts: [
			{
				id: "crystal-overhead",
				title: "四片",
				en: "Four",
				duration: 15,
				src: "/media/crystal-overhead.mp4",
				poster: "/media/poster-crystal-overhead.jpg",
				audio: "/media/crystal-overhead.m4a",
				note: "俯拍连切四刀，晶片依次倒下，石面清脆作响。",
				fileName: "crystal-steak-four-overhead.mp4",
				series: "crystal"
			},
			{
				id: "crystal-succession",
				title: "连切",
				en: "Cuts",
				duration: 15,
				src: "/media/crystal-succession.mp4",
				poster: "/media/poster-crystal-succession.jpg",
				audio: "/media/crystal-succession.m4a",
				note: "从整块水晶肋眼连切四刀，刀起片落。",
				fileName: "crystal-steak-succession.mp4",
				series: "crystal"
			},
			{
				id: "crystal-four",
				title: "立片",
				en: "Slabs",
				duration: 15,
				src: "/media/crystal-four.mp4",
				poster: "/media/poster-crystal-four.jpg",
				audio: "/media/crystal-four.m4a",
				note: "侧刀连切，三到四片水晶立在案上。",
				fileName: "crystal-steak-slabs.mp4",
				series: "crystal"
			},
			{
				id: "crystal-fall",
				title: "倾倒",
				en: "Fall",
				duration: 10,
				src: "/media/crystal-fall.mp4",
				poster: "/media/poster-crystal-fall.jpg",
				audio: "/media/crystal-fall.m4a",
				note: "四片晶面依次倾倒，碰撞出清脆铃声。",
				fileName: "crystal-steak-fall.mp4",
				series: "crystal"
			},
			{
				id: "crystal-topple",
				title: "倒下",
				en: "Topple",
				duration: 15,
				src: "/media/crystal-topple.mp4",
				poster: "/media/poster-crystal-topple.jpg",
				audio: "/media/crystal-topple.m4a",
				note: "切片被刀锋推倒，晶片落在花岗岩上。",
				fileName: "crystal-steak-topple.mp4",
				series: "crystal"
			},
			{
				id: "side",
				title: "侧切",
				en: "Side",
				duration: 15,
				src: "/media/side.mp4",
				poster: "/media/poster-side.jpg",
				audio: "/media/side.m4a",
				note: "刀锋从侧面缓缓剖开琥珀玻璃肋眼。",
				fileName: "glass-steak-side.mp4",
				series: "glass"
			},
			{
				id: "press",
				title: "下压",
				en: "Press",
				duration: 15,
				src: "/media/press.mp4",
				poster: "/media/poster-press.jpg",
				audio: "/media/press.m4a",
				note: "整刀下压，晶面碎裂后层层分离。",
				fileName: "glass-steak-press.mp4",
				series: "glass"
			},
			{
				id: "split",
				title: "对开",
				en: "Split",
				duration: 10,
				src: "/media/split.mp4",
				poster: "/media/poster-split.jpg",
				audio: "/media/split.m4a",
				note: "从右侧切入，牛排对半打开。",
				fileName: "glass-steak-split.mp4",
				series: "glass"
			},
			{
				id: "hand",
				title: "俯切",
				en: "Overhead",
				duration: 10,
				src: "/media/hand.mp4",
				poster: "/media/poster-hand.jpg",
				audio: "/media/hand.m4a",
				note: "俯拍持刀，完整切开这块玻璃肋眼。",
				fileName: "glass-steak-overhead.mp4",
				series: "glass"
			},
			{
				id: "egg",
				title: "荷包蛋",
				en: "Egg",
				duration: 15,
				src: "/media/steak-egg.mp4",
				poster: "/media/poster-steak-egg.jpg",
				audio: "/media/steak-egg.m4a",
				note: "大理石板上煎一枚玻璃荷包蛋，无火，油边翻滚，玻璃刀对切开黄。",
				fileName: "glass-egg.mp4",
				series: "glass"
			},
			{
				id: "egg-sizzle",
				title: "煎边",
				en: "Sizzle",
				duration: 15,
				src: "/media/steak-egg-sizzle.mp4",
				poster: "/media/poster-steak-egg-sizzle.jpg",
				audio: "/media/steak-egg-sizzle.m4a",
				note: "热气与油花，玻璃刀切中，刀碰大理石清脆作响。",
				fileName: "glass-egg-sizzle.mp4",
				series: "glass"
			},
			{
				id: "egg-yolk",
				title: "蛋黄",
				en: "Yolk",
				duration: 15,
				src: "/media/steak-egg-yolk.mp4",
				poster: "/media/poster-steak-egg-yolk.jpg",
				audio: "/media/steak-egg-yolk.m4a",
				note: "切开后粘稠蛋黄流出，带着液体声。",
				fileName: "glass-egg-yolk.mp4",
				series: "glass"
			}
		],
		stills: [
			{
				id: "crystal-hero",
				title: "水晶整块",
				en: "Crystal",
				src: "/media/crystal-hero.jpg",
				fileName: "crystal-steak-hero.jpg"
			},
			{
				id: "crystal-slices",
				title: "四片晶面",
				en: "Slices",
				src: "/media/crystal-slices.jpg",
				fileName: "crystal-steak-slices.jpg"
			},
			{
				id: "hero",
				title: "琥珀整块",
				en: "Whole",
				src: "/media/steak-hero.jpg",
				fileName: "glass-steak-hero.jpg"
			},
			{
				id: "knife",
				title: "落刀",
				en: "Contact",
				src: "/media/steak-knife.jpg",
				fileName: "glass-steak-knife.jpg"
			},
			{
				id: "sliced",
				title: "切开",
				en: "Opened",
				src: "/media/steak-sliced.jpg",
				fileName: "glass-steak-sliced.jpg"
			},
			{
				id: "egg-still",
				title: "荷包蛋",
				en: "Egg",
				src: "/media/steak-egg.jpg",
				fileName: "glass-egg.jpg"
			}
		]
	},
	{
		id: "veg",
		title: "蔬菜",
		en: "Vegetables",
		blurb: "玻璃胡萝卜、番茄、西蓝花、黄瓜、茄子、洋葱与土豆。",
		cover: "/media/veg-tomato.jpg",
		cuts: [
			{
				id: "carrot",
				title: "胡萝卜",
				en: "Carrot",
				duration: 15,
				src: "/media/veg-carrot.mp4",
				poster: "/media/poster-veg-carrot.jpg",
				audio: "/media/veg-carrot.m4a",
				note: "橙晶胡萝卜连切三刀，圆片倾倒，石面清脆作响。",
				fileName: "glass-carrot.mp4",
				series: "glass"
			},
			{
				id: "tomato",
				title: "番茄",
				en: "Tomato",
				duration: 15,
				src: "/media/veg-tomato.mp4",
				poster: "/media/poster-veg-tomato.jpg",
				audio: "/media/veg-tomato.m4a",
				note: "红晶番茄连切三刀，切片倒下发出玻璃清响。",
				fileName: "glass-tomato.mp4",
				series: "glass"
			},
			{
				id: "broccoli",
				title: "西蓝花",
				en: "Broccoli",
				duration: 15,
				src: "/media/veg-broccoli.mp4",
				poster: "/media/poster-veg-broccoli.jpg",
				audio: "/media/veg-broccoli.m4a",
				note: "翠绿水晶西蓝花连切两三刀，花蕾晶片落地。",
				fileName: "glass-broccoli.mp4",
				series: "glass"
			},
			{
				id: "cucumber",
				title: "黄瓜",
				en: "Cucumber",
				duration: 15,
				src: "/media/veg-cucumber.mp4",
				poster: "/media/poster-veg-cucumber.jpg",
				audio: "/media/veg-cucumber.m4a",
				note: "翠晶黄瓜连切四刀，圆片倾倒，石面清脆作响。",
				fileName: "glass-cucumber.mp4",
				series: "glass"
			},
			{
				id: "eggplant",
				title: "茄子",
				en: "Eggplant",
				duration: 15,
				src: "/media/veg-eggplant.mp4",
				poster: "/media/poster-veg-eggplant.jpg",
				audio: "/media/veg-eggplant.m4a",
				note: "紫晶茄子连切四刀，切片倒下发出玻璃清响。",
				fileName: "glass-eggplant.mp4",
				series: "glass"
			},
			{
				id: "onion",
				title: "洋葱",
				en: "Onion",
				duration: 15,
				src: "/media/veg-onion.mp4",
				poster: "/media/poster-veg-onion.jpg",
				audio: "/media/veg-onion.m4a",
				note: "金晶洋葱连切四刀，晶片层层倒下。",
				fileName: "glass-onion.mp4",
				series: "glass"
			},
			{
				id: "potato",
				title: "土豆",
				en: "Potato",
				duration: 15,
				src: "/media/veg-potato.mp4",
				poster: "/media/poster-veg-potato.jpg",
				audio: "/media/veg-potato.m4a",
				note: "餐刀先敲两下玻璃土豆，再切两刀，晶片侧倒清脆作响。",
				fileName: "glass-potato.mp4",
				series: "glass"
			},
			{
				id: "potato-tap",
				title: "敲击",
				en: "Tap",
				duration: 15,
				src: "/media/veg-potato-tap.mp4",
				poster: "/media/poster-veg-potato-tap.jpg",
				audio: "/media/veg-potato-tap.m4a",
				note: "刀背轻叩两下，连切两片，切片倒下发出玻璃清响。",
				fileName: "glass-potato-tap.mp4",
				series: "glass"
			}
		],
		stills: [
			{
				id: "veg-carrot",
				title: "胡萝卜",
				en: "Carrot",
				src: "/media/veg-carrot.jpg",
				fileName: "glass-carrot.jpg"
			},
			{
				id: "veg-tomato",
				title: "番茄",
				en: "Tomato",
				src: "/media/veg-tomato.jpg",
				fileName: "glass-tomato.jpg"
			},
			{
				id: "veg-broccoli",
				title: "西蓝花",
				en: "Broccoli",
				src: "/media/veg-broccoli.jpg",
				fileName: "glass-broccoli.jpg"
			},
			{
				id: "veg-cucumber",
				title: "黄瓜",
				en: "Cucumber",
				src: "/media/veg-cucumber.jpg",
				fileName: "glass-cucumber.jpg"
			},
			{
				id: "veg-eggplant",
				title: "茄子",
				en: "Eggplant",
				src: "/media/veg-eggplant.jpg",
				fileName: "glass-eggplant.jpg"
			},
			{
				id: "veg-onion",
				title: "洋葱",
				en: "Onion",
				src: "/media/veg-onion.jpg",
				fileName: "glass-onion.jpg"
			},
			{
				id: "veg-potato",
				title: "土豆",
				en: "Potato",
				src: "/media/veg-potato.jpg",
				fileName: "glass-potato.jpg"
			}
		]
	},
	{
		id: "cosmos",
		title: "宇宙",
		en: "Cosmos",
		blurb: "玻璃土星、台风、地球、太阳与黑洞。",
		cover: "/media/cover-saturn.jpg",
		cuts: [
			{
				id: "saturn",
				title: "土星",
				en: "Saturn",
				duration: 15,
				src: "/media/cosmos-saturn.mp4",
				poster: "/media/poster-cosmos-saturn.jpg",
				audio: "/media/cosmos-saturn.m4a",
				note: "玻璃土星连切三刀，蜂蜜涌出，晶环碎落。",
				fileName: "glass-saturn.mp4",
				series: "glass"
			},
			{
				id: "saturn-cuts",
				title: "星环",
				en: "Rings",
				duration: 15,
				src: "/media/cosmos-saturn-cuts.mp4",
				poster: "/media/poster-cosmos-saturn-cuts.jpg",
				audio: "/media/cosmos-saturn-cuts.m4a",
				note: "刀锋连切三片，星环掉落，晶片倾倒清脆作响。",
				fileName: "glass-saturn-three.mp4",
				series: "glass"
			},
			{
				id: "saturn-honey",
				title: "蜜核",
				en: "Amber",
				duration: 15,
				src: "/media/cosmos-saturn-honey.mp4",
				poster: "/media/poster-cosmos-saturn-honey.jpg",
				audio: "/media/cosmos-saturn-honey.m4a",
				note: "切口涌出粘稠蜂蜜岩浆，三片立在案上。",
				fileName: "glass-saturn-honey.mp4",
				series: "glass"
			},
			{
				id: "typhoon",
				title: "台风",
				en: "Typhoon",
				duration: 15,
				src: "/media/cosmos-typhoon.mp4",
				poster: "/media/poster-cosmos-typhoon.jpg",
				audio: "/media/cosmos-typhoon.m4a",
				note: "玻璃台风旋转电闪，连切三刀，流水清脆，切块消散。无风声雷声。",
				fileName: "glass-typhoon.mp4",
				series: "glass"
			},
			{
				id: "earth",
				title: "地球",
				en: "Earth",
				duration: 15,
				src: "/media/cosmos-earth.mp4",
				poster: "/media/poster-cosmos-earth.jpg",
				audio: "/media/cosmos-earth.m4a",
				note: "玻璃地球连切三刀，粘稠岩浆顺切口流下，晶片侧倒。",
				fileName: "glass-earth.mp4",
				series: "glass"
			},
			{
				id: "earth-lava",
				title: "岩浆",
				en: "Magma",
				duration: 15,
				src: "/media/cosmos-earth-lava.mp4",
				poster: "/media/poster-cosmos-earth-lava.jpg",
				audio: "/media/cosmos-earth-lava.m4a",
				note: "三片立起，岩浆冷却结壳又被新岩浆覆过。",
				fileName: "glass-earth-lava.mp4",
				series: "glass"
			},
			{
				id: "earth-fall",
				title: "侧倒",
				en: "Tilt",
				duration: 15,
				src: "/media/cosmos-earth-fall.mp4",
				poster: "/media/poster-cosmos-earth-fall.jpg",
				audio: "/media/cosmos-earth-fall.m4a",
				note: "切片侧倒碰撞，岩浆粘稠涌出，清脆作响。",
				fileName: "glass-earth-fall.mp4",
				series: "glass"
			},
			{
				id: "sun",
				title: "太阳",
				en: "Sun",
				duration: 15,
				src: "/media/cosmos-sun-sphere.mp4",
				poster: "/media/poster-cosmos-sun-sphere.jpg",
				audio: "/media/cosmos-sun-sphere.m4a",
				note: "餐刀一剖发光玻璃太阳，两瓣倒下，岩浆抹上玻璃吐司。",
				fileName: "glass-sun.mp4",
				series: "glass"
			},
			{
				id: "blackhole",
				title: "黑洞",
				en: "Hole",
				duration: 15,
				src: "/media/cosmos-blackhole.mp4",
				poster: "/media/poster-cosmos-blackhole.jpg",
				audio: "/media/cosmos-blackhole.m4a",
				note: "玻璃黑洞连切三片，星核发光，切片侧倒，刀子被吸入剩余核。",
				fileName: "glass-blackhole.mp4",
				series: "glass"
			},
			{
				id: "blackhole-pull",
				title: "吸入",
				en: "Pull",
				duration: 15,
				src: "/media/cosmos-blackhole-pull.mp4",
				poster: "/media/poster-cosmos-blackhole-pull.jpg",
				audio: "/media/cosmos-blackhole-pull.m4a",
				note: "三片卸开后，剩余黑洞把餐刀吸进去。",
				fileName: "glass-blackhole-pull.mp4",
				series: "glass"
			}
		],
		stills: [
			{
				id: "saturn-whole",
				title: "整颗",
				en: "Whole",
				src: "/media/cover-saturn.jpg",
				fileName: "glass-saturn.jpg"
			},
			{
				id: "saturn-sliced",
				title: "切开",
				en: "Opened",
				src: "/media/cosmos-saturn-sliced.jpg",
				fileName: "glass-saturn-sliced.jpg"
			},
			{
				id: "typhoon-still",
				title: "台风",
				en: "Typhoon",
				src: "/media/cosmos-typhoon.jpg",
				fileName: "glass-typhoon.jpg"
			},
			{
				id: "earth-still",
				title: "地球",
				en: "Earth",
				src: "/media/cosmos-earth.jpg",
				fileName: "glass-earth.jpg"
			},
			{
				id: "sun-still",
				title: "太阳",
				en: "Sun",
				src: "/media/cosmos-sun-sphere.jpg",
				fileName: "glass-sun.jpg"
			},
			{
				id: "blackhole-still",
				title: "黑洞",
				en: "Hole",
				src: "/media/cosmos-blackhole.jpg",
				fileName: "glass-blackhole.jpg"
			}
		]
	}
];
var SERIES_LABEL = {
	crystal: {
		title: "水晶",
		en: "Crystal"
	},
	glass: {
		title: "玻璃",
		en: "Glass"
	}
};
function getModule(id) {
	return MODULES.find((item) => item.id === id) ?? MODULES[0];
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatTime(seconds) {
	if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
	return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-foreground hover:opacity-90",
			ghost: "bg-transparent text-foreground hover:bg-muted border border-border",
			icon: "bg-transparent text-foreground hover:bg-muted"
		},
		size: {
			default: "h-11 px-5 text-sm rounded-md",
			sm: "h-9 px-3 text-xs rounded-sm",
			icon: "size-11 rounded-md",
			iconSm: "size-9 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function SourcesSheet({ open, onOpenChange, atelier }) {
	const groups = ["crystal", "glass"].map((series) => ({
		series,
		...SERIES_LABEL[series],
		cuts: atelier.cuts.filter((item) => item.series === series)
	})).filter((group) => group.cuts.length > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-40 bg-background/80 transition-opacity duration-200 data-[state=closed]:opacity-0 data-[state=open]:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed inset-x-0 bottom-0 z-50 max-h-screen overflow-y-auto rounded-t-xl border border-border bg-card p-6 pb-10 outline-none md:inset-y-8 md:inset-x-auto md:left-1/2 md:w-full md:max-w-3xl md:-translate-x-1/2 md:rounded-xl md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-display text-3xl italic text-foreground",
						children: "源文件"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
						className: "mt-1 text-sm text-muted-foreground",
						children: [atelier.title, "模块 · 成片、静帧与切割音轨。"]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "icon",
							size: "iconSm",
							"aria-label": "关闭",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})
					})]
				}),
				groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground",
						children: groups.length > 1 ? `${group.title} · Video` : "Video"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid grid-cols-1 gap-3 md:grid-cols-2",
						children: group.cuts.map((cut) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative flex gap-3 overflow-hidden rounded-lg border border-border bg-muted p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cut.poster,
								alt: "",
								className: "block h-16 w-28 shrink-0 rounded-sm object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "truncate text-sm text-foreground",
										children: [cut.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 text-muted-foreground",
											children: cut.en
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-0.5 text-xs text-muted-foreground tabular-nums",
										children: [cut.duration, "s · mp4"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: cut.src,
										download: cut.fileName,
										className: "mt-2 inline-flex h-9 items-center gap-1.5 text-xs text-accent hover:opacity-80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "下载成片"]
									})
								]
							})]
						}, cut.id))
					})]
				}, group.series)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground",
						children: "Stills"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
						children: atelier.stills.map((still) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: still.src,
									alt: still.title,
									className: "mb-2 aspect-video w-full rounded-md object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-foreground",
									children: still.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: still.src,
									download: still.fileName,
									className: "mt-1 inline-flex h-9 items-center gap-1.5 text-xs text-accent hover:opacity-80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "下载"]
								})
							]
						}, still.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground",
					children: "Audio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-2 sm:grid-cols-2",
					children: atelier.cuts.map((cut) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between rounded-md border border-border px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-foreground",
							children: [cut.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-xs text-muted-foreground",
								children: "m4a"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: cut.audio,
							download: `${cut.id}.m4a`,
							className: "inline-flex h-9 items-center gap-1.5 text-xs text-accent hover:opacity-80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "音轨"]
						})]
					}, cut.id))
				})] })
			]
		})] })
	});
}
function Studio() {
	const videoRef = (0, import_react.useRef)(null);
	const [moduleId, setModuleId] = (0, import_react.useState)(MODULES[0].id);
	const atelier = getModule(moduleId);
	const [cutId, setCutId] = (0, import_react.useState)(atelier.cuts[0].id);
	const [unlocked, setUnlocked] = (0, import_react.useState)(false);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [muted, setMuted] = (0, import_react.useState)(false);
	const [loop, setLoop] = (0, import_react.useState)(true);
	const [slow, setSlow] = (0, import_react.useState)(false);
	const [volume, setVolume] = (0, import_react.useState)(.88);
	const [currentTime, setCurrentTime] = (0, import_react.useState)(0);
	const [duration, setDuration] = (0, import_react.useState)(atelier.cuts[0].duration);
	const [sourcesOpen, setSourcesOpen] = (0, import_react.useState)(false);
	const cut = atelier.cuts.find((item) => item.id === cutId) ?? atelier.cuts[0];
	const grouped = (0, import_react.useMemo)(() => {
		return ["crystal", "glass"].map((series) => ({
			series,
			...SERIES_LABEL[series],
			cuts: atelier.cuts.filter((item) => item.series === series)
		})).filter((group) => group.cuts.length > 0);
	}, [atelier]);
	const applyRate = (0, import_react.useCallback)(() => {
		const video = videoRef.current;
		if (video) video.playbackRate = slow ? .75 : 1;
	}, [slow]);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		video.loop = loop;
		video.volume = volume;
		video.muted = muted;
		applyRate();
	}, [
		loop,
		volume,
		muted,
		applyRate,
		cutId
	]);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video || !unlocked) return;
		video.currentTime = 0;
		video.play().then(() => setPlaying(true), () => setPlaying(false));
	}, [cutId, unlocked]);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			const target = event.target;
			if (target && [
				"INPUT",
				"TEXTAREA",
				"SELECT"
			].includes(target.tagName)) return;
			if (event.key === " " || event.key === "k") {
				event.preventDefault();
				togglePlay();
			} else if (event.key === "m") setMuted((value) => !value);
			else if (event.key === "l") setLoop((value) => !value);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [unlocked, playing]);
	function selectModule(nextId) {
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
	function seek(ratio) {
		const video = videoRef.current;
		if (!video || !Number.isFinite(video.duration)) return;
		video.currentTime = Math.min(Math.max(ratio, 0), 1) * video.duration;
	}
	const progress = duration > 0 ? currentTime / duration : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-4 px-5 py-4 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl italic leading-none text-foreground md:text-4xl",
						children: "晶切"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs tracking-[0.28em] uppercase text-muted-foreground",
						children: "Glass Atelier"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => setSourcesOpen(true),
					children: "源文件"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-8 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mb-5 flex flex-wrap items-center gap-2",
						"aria-label": "物件模块",
						children: MODULES.map((item) => {
							const active = item.id === atelier.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => selectModule(item.id),
								className: cn("h-11 rounded-md border px-4 text-sm transition-[border-color,background-color] duration-150", active ? "border-accent bg-muted text-foreground" : "border-border text-muted-foreground hover:border-ring hover:text-foreground"),
								"aria-current": active ? "page" : void 0,
								children: [item.title, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-2 text-xs tracking-[0.16em] uppercase text-muted-foreground",
									children: [" ", item.en]
								})]
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl italic text-foreground md:text-4xl",
							children: atelier.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [atelier.blurb, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-2 tabular-nums",
								children: [atelier.cuts.length, " 条成片"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative overflow-hidden rounded-xl border border-border bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-video overflow-hidden bg-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									ref: videoRef,
									className: "h-full w-full object-cover",
									src: cut.src,
									poster: cut.poster,
									playsInline: true,
									preload: "auto",
									loop,
									onTimeUpdate: (event) => setCurrentTime(event.currentTarget.currentTime),
									onLoadedMetadata: (event) => setDuration(event.currentTarget.duration || cut.duration),
									onPlay: () => setPlaying(true),
									onPause: () => setPlaying(false),
									onClick: () => void togglePlay()
								}, cut.src),
								!unlocked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void startCut(),
									className: "absolute inset-0 flex flex-col items-center justify-center bg-background/35 px-6 text-center",
									"aria-label": `切开这块${cut.title}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: cut.poster,
											alt: "",
											className: "pointer-events-none absolute inset-0 h-full w-full object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-background/40" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative font-display text-4xl italic text-foreground md:text-7xl",
											children: "切开"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative mt-2 text-sm tracking-[0.22em] uppercase text-accent md:mt-3",
											children: cut.en
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative mt-4 inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground md:mt-8",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 fill-current" }), "播放切割"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, { className: "size-3.5" }), "建议佩戴耳机"]
										})
									]
								}),
								unlocked && !playing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => void togglePlay(),
									className: "absolute inset-0 flex items-center justify-center bg-background/25",
									"aria-label": "继续播放",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-7 fill-current" })
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border px-4 py-3 md:px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "group relative h-1.5 w-full rounded-full bg-muted",
								"aria-label": "进度",
								onClick: (event) => {
									const rect = event.currentTarget.getBoundingClientRect();
									seek((event.clientX - rect.left) / rect.width);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute inset-y-0 left-0 rounded-full bg-accent",
									style: { width: `${Math.min(progress, 1) * 100}%` }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "icon",
										size: "iconSm",
										onClick: () => void togglePlay(),
										"aria-label": playing ? "暂停" : "播放",
										children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 fill-current" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "icon",
										size: "iconSm",
										onClick: () => setMuted((value) => !value),
										"aria-label": muted ? "取消静音" : "静音",
										children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 0,
										max: 1,
										step: .01,
										value: muted ? 0 : volume,
										onChange: (event) => {
											const next = Number(event.target.value);
											setVolume(next);
											if (next > 0) setMuted(false);
										},
										className: "h-11 w-24 accent-accent md:w-32",
										style: { caretColor: "transparent" },
										"aria-label": "音量"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs tabular-nums text-muted-foreground",
										children: [
											formatTime(currentTime),
											" / ",
											formatTime(duration)
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "ml-auto flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: loop ? "primary" : "ghost",
											size: "sm",
											onClick: () => setLoop((value) => !value),
											"aria-pressed": loop,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "size-3.5" }), "循环"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: slow ? "primary" : "ghost",
											size: "sm",
											onClick: () => setSlow((value) => !value),
											"aria-pressed": slow,
											children: "慢放"
										})]
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm text-muted-foreground",
						children: cut.note
					}),
					grouped.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-6",
						children: [grouped.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mb-3 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground",
							children: [group.title, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-2",
								children: [" ", group.en]
							})]
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid grid-cols-2 gap-3 md:grid-cols-3",
							children: group.cuts.map((item) => {
								const active = item.id === cut.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "min-w-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setCutId(item.id),
										className: cn("w-full overflow-hidden rounded-lg border text-left transition-[border-color,opacity] duration-150", active ? "border-accent" : "border-border hover:border-ring"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.poster,
											alt: "",
											className: "aspect-video w-full object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-baseline justify-between gap-2 px-3 py-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm text-foreground",
												children: item.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs tracking-[0.16em] uppercase text-muted-foreground",
												children: item.en
											})]
										})]
									})
								}, item.id);
							})
						})]
					}, group.series))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourcesSheet, {
				open: sourcesOpen,
				onOpenChange: setSourcesOpen,
				atelier
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {});
}
//#endregion
export { Home as component };
