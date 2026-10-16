"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import { encode } from "qss";
import * as React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

import { cn } from "@/lib/utils";

const subscribeToNothing = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

type HoverLinkCardBaseProps = {
  /** Inline content that triggers the preview and links to the target URL. */
  children: React.ReactNode;
  /** URL opened by the trigger and preview card. */
  url: string;
  /** Additional classes applied to the trigger link. */
  className?: string;
  /** Preview image width in pixels. Defaults to 280. */
  width?: number;
  /** Preview image height in pixels. Defaults to 160. */
  height?: number;
  /** Optional title displayed below the preview image. */
  title?: string;
  /** Optional description displayed below the title. */
  description?: string;
};

/** Props for a locally sourced static preview image. */
type StaticHoverLinkCardProps = HoverLinkCardBaseProps & {
  mode: "static";
  /** Local or configured remote image path used as the preview. */
  imageSrc: string;
};

/** Props for a Microlink-generated screenshot preview. */
type DynamicHoverLinkCardProps = HoverLinkCardBaseProps & {
  mode: "dynamic";
  /** Screenshot quality used by Microlink. Defaults to 50. */
  quality?: number;
  /** Dynamic mode generates its image from `url`. */
  imageSrc?: never;
};

/** A link that reveals an animated image preview when hovered or focused. */
export type HoverLinkCardProps =
  | StaticHoverLinkCardProps
  | DynamicHoverLinkCardProps;

/** Renders a link with a portal-based, cursor-responsive image preview. */
export function HoverLinkCard(props: HoverLinkCardProps) {
  const {
    children,
    url,
    className,
    width = 180,
    height = 130,
    title,
    description,
  } = props;
  const quality = props.mode === "dynamic" ? props.quality ?? 50 : 50;
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = React.useState(false);
  const isMounted = React.useSyncExternalStore(
    subscribeToNothing,
    getClientSnapshot,
    getServerSnapshot,
  );

  const previewSrc =
    props.mode === "static"
      ? props.imageSrc
      : `https://api.microlink.io/?${encode({
          url,
          screenshot: true,
          meta: false,
          embed: "screenshot.url",
          colorScheme: "light",
          "viewport.isMobile": true,
          "viewport.deviceScaleFactor": 1,
          "viewport.width": width * 3,
          "viewport.height": height * 3,
          "screenshot.type": "jpeg",
          "screenshot.quality": quality,
        })}`;

  const [imageState, setImageState] = React.useState<{
    src: string;
    status: "loading" | "loaded" | "error";
  }>({ src: previewSrc, status: "loading" });
  const imageStatus =
    imageState.src === previewSrc ? imageState.status : "loading";

  const x = useMotionValue(0);
  const translateX = useSpring(x, { stiffness: 100, damping: 15 });

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetFromCenter = (event.clientX - rect.left - rect.width / 2) / 3;
    x.set(Math.max(-40, Math.min(40, offsetFromCenter)));
  };

  const handleImageLoad = () =>
    setImageState({ src: previewSrc, status: "loaded" });
  const handleImageError = () =>
    setImageState({ src: previewSrc, status: "error" });

  return (
    <>
      {isMounted && (
        <div className="hidden" aria-hidden="true">
          <Image
            src={previewSrc}
            alt=""
            width={width}
            height={height}
            preload
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
      )}

      <HoverCardPrimitive.Root
        openDelay={100}
        closeDelay={150}
        onOpenChange={setIsOpen}
      >
        <HoverCardPrimitive.Trigger asChild>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-neutral-900 dark:text-white",
              className,
            )}
            onMouseMove={handleMouseMove}
          >
            {children}
          </a>
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Portal>
          <HoverCardPrimitive.Content
            forceMount
            side="top"
            align="center"
            sideOffset={12}
            aria-hidden={!isOpen}
            className="z-50 outline-none"
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 18, scale: 0.92 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 12, scale: 0.94 }
                  }
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-[5px] shadow-xl shadow-black/10 dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-black/40"
                  style={{
                    width: width + 16,
                    maxWidth: "calc(100vw - 24px)",
                    x: translateX,
                  }}
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={title ? `Open ${title}` : "Open link preview"}
                    className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    <div
                      className="relative overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800"
                      style={{ height }}
                    >
                      {imageStatus !== "loaded" && (
                        <div
                          role={imageStatus === "error" ? "img" : undefined}
                          aria-label={
                            imageStatus === "error"
                              ? "Preview image unavailable"
                              : undefined
                          }
                          className="absolute inset-0 flex items-center justify-center bg-neutral-100 text-xs text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
                        >
                          {imageStatus === "error" ? (
                            <span>Preview unavailable</span>
                          ) : (
                            <span className="size-6 animate-pulse rounded-full bg-neutral-300 dark:bg-neutral-700" />
                          )}
                        </div>
                      )}
                      {imageStatus !== "error" && (
                        <Image
                          src={previewSrc}
                          alt={title ? `${title} preview` : "Website preview"}
                          fill
                          sizes={`${width}px`}
                          onLoad={handleImageLoad}
                          onError={handleImageError}
                          className={cn(
                            "object-cover transition-opacity duration-200",
                            imageStatus === "loaded"
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                      )}
                    </div>
                    {(title || description) && (
                      <div className="px-2 pb-2 pt-3">
                        {title && (
                          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                            {title}
                          </h3>
                        )}
                        {description && (
                          <p className="mt-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                            {description}
                          </p>
                        )}
                      </div>
                    )}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </HoverCardPrimitive.Content>
        </HoverCardPrimitive.Portal>
      </HoverCardPrimitive.Root>
    </>
  );
}