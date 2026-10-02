"use client";

import React, {
  type CSSProperties,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export type JourneyItem = {
  id: string;
  stepNumber: string;
  title: string;
  category: string;
  content: string;
};

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  duration?: number;
  scrollDuration?: number;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

// Top items (Steps 01, 03)
const topJourneyData: JourneyItem[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Initial Inquiry Form",
    category: "FIRST CONTACT",
    content: "We get to know your child's personality, academics, and sporting aspirations through a personalized intake evaluation.",
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Best Pathway For Your Child",
    category: "STRATEGIC MATCHING",
    content: "Curating a tailored portfolio of U.S. boarding schools matching academic rigor, athletic coaching, and family priorities.",
  },
];

// Bottom items (Steps 02, 04)
const bottomJourneyData: JourneyItem[] = [
  {
    id: "step-2",
    stepNumber: "02",
    title: "Admission Process",
    category: "APPLICATION ROADMAP",
    content: "Step-by-step guidance through testing requirements, recommendation strategy, interview simulations, and athletic video reels.",
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Documentation & Visa Support",
    category: "ENROLLMENT & F-1 VISA",
    content: "Complete assistance with I-20 issuance, F-1 student visa filings, financial compliance, and pre-departure boarding readiness.",
  },
];

const allJourneyItems: JourneyItem[] = [
  topJourneyData[0],
  bottomJourneyData[0],
  topJourneyData[1],
  bottomJourneyData[1],
];

export default function TheJourney({
  title = "GESP Process",
  periodLabel = "We advise, and guide potential students to study at boarding schools in the USA that best fits their needs, wants and future goals.",
  textColor = "#333333",
  mutedTextColor = "#69727D",
  activeColor = "#FAB900",
  backgroundColor = "transparent",
  imageUrl = "/images/campus-aerial.jpg",
  imageAlt = "Partner Boarding School Campus Quad",
  duration,
  scrollDuration = 1.2,
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const animationDuration = duration ?? scrollDuration;
  const normalizedDuration = Math.max(0.2, animationDuration);

  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
  };
  const activeStyle: CSSProperties = {
    backgroundColor: activeColor,
  };
  const mutedTextStyle: CSSProperties = {
    color: mutedTextColor,
  };

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isMobile = window.innerWidth < 768;
    const slidePercent = isMobile ? -55 : -48;
    const lineWidth = isMobile ? "75%" : "98%";
    const lineStart = isMobile ? "top 25%" : "top 20%";
    const slideEnd = isMobile ? "85% 50%" : "92% bottom";
    const lineEnd = isMobile ? "80% 50%" : "92% bottom";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: slideEnd,
        scrub: 0.5,
      },
      defaults: {
        ease: "none",
      },
    });

    tl.fromTo(
      wholeSliderRef.current,
      { xPercent: 0 },
      { xPercent: slidePercent },
    );

    if (reducedMotion) {
      gsap.set(".journey-line", { width: lineWidth });
      return;
    }

    gsap.to(".journey-line", {
      width: lineWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: lineStart,
        end: lineEnd,
        scrub: 0.5,
      },
    });
  }, { dependencies: [reducedMotion], scope: sectionRef });

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = allJourneyItems;

    if (reducedMotion) {
      items.forEach((item) => {
        gsap.set(`.jl-${item.id}`, { scaleY: 1 });
        gsap.set(`.jd-${item.id}`, { scale: 1 });
        gsap.set(`.title-${item.id}`, { opacity: 1, y: 0 });
        gsap.set(`.description-${item.id}`, { opacity: 1, y: 0 });
      });
      return;
    }

    items.forEach((item) => {
      gsap.set(`.jl-${item.id}`, {
        scaleY: 0,
        transformOrigin: "bottom bottom",
      });
      gsap.set(`.jd-${item.id}`, { scale: 0 });
      gsap.set(`.title-${item.id}`, { opacity: 0.3, y: 20 });
      gsap.set(`.description-${item.id}`, { opacity: 0.3, y: 20 });
    });

    const createItemTimeline = (
      item: JourneyItem,
      startPos: number,
      endPos: number,
    ) => {
      const lineSelector = `.jl-${item.id}`;
      const dotSelector = `.jd-${item.id}`;
      const titleSelector = `.title-${item.id}`;
      const descriptionSelector = `.description-${item.id}`;

      const isTop = topJourneyData.some((topItem) => topItem.id === item.id);

      if (!isTop) {
        gsap.set(lineSelector, { transformOrigin: "top top" });
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: `${startPos}% 30%`,
          end: `${endPos}% 50%`,
          scrub: 0.5,
        },
      });

      timeline
        .to(lineSelector, {
          scaleY: 1,
          duration: normalizedDuration * 0.4,
        })
        .to(
          dotSelector,
          {
            scale: 1,
            duration: normalizedDuration * 0.4,
          },
          "<",
        )
        .to(
          titleSelector,
          {
            y: 0,
            opacity: 1,
            duration: normalizedDuration * 0.6,
            ease: "power2.out",
          },
          "<",
        )
        .to(
          descriptionSelector,
          {
            y: 0,
            opacity: 1,
            duration: normalizedDuration * 0.6,
            ease: "power2.out",
          },
          "<+=0.1",
        );

      return timeline;
    };

    const positions: ReadonlyArray<readonly [number, number]> =
      window.innerWidth < 768
        ? [
            [15, 30],
            [28, 45],
            [45, 62],
            [60, 78],
          ]
        : [
            [8, 28],
            [22, 45],
            [40, 65],
            [58, 85],
          ];

    items.forEach((item, index) => {
      const [startPos, endPos] = positions[index];
      createItemTimeline(item, startPos, endPos);
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, { dependencies: [normalizedDuration, reducedMotion], scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="h-[180vw] max-[768px]:h-[300vh] w-full relative border-b border-[#E9E9E9]"
      style={sectionStyle}
    >
      <div className="h-screen w-full sticky top-0 pt-16 lg:pt-24 overflow-hidden flex flex-col justify-center">
        <div
          ref={wholeSliderRef}
          className="mr-[2vw] flex h-[34vw] w-[190vw] items-center gap-[4vw] px-[5vw] max-[768px]:h-[80vh] max-[768px]:w-[500vw] max-[768px]:px-[7vw]"
        >
          {/* Leading Media Card with subtle rounded corners */}
          <div className="h-full w-[28vw] overflow-hidden rounded-2xl max-[768px]:h-[55vw] max-[768px]:w-[75vw] max-[768px]:rounded-2xl border border-[#E9E9E9] shadow-md bg-[#EAE7DD] shrink-0 relative group">
            <img
              src={imageUrl}
              alt={imageAlt}
              draggable={false}
              className="h-full w-full object-cover img-zoom filter contrast-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041235]/85 via-[#0D2153]/20 to-transparent p-6 flex flex-col justify-end text-white">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#FAB900] font-bold block mb-1">
                GESP METHODOLOGY
              </span>
              <span className="font-heading text-lg sm:text-xl font-normal leading-snug">
                From Initial Inquiry to Day One on Campus
              </span>
            </div>
          </div>

          <div className="relative h-full w-full">
            {/* Center Timeline Line */}
            <div className="w-full absolute left-0 top-[49%] -translate-y-1/2 flex items-center h-fit">
              <div
                className="h-3 w-3 max-[768px]:h-2.5 max-[768px]:w-2.5 rounded-full shadow-sm"
                style={activeStyle}
              ></div>
              <div
                className="h-[2px] w-[0%] journey-line bg-[#0D2153]"
              ></div>
              <div
                className="h-3 w-3 max-[768px]:h-2.5 max-[768px]:w-2.5 rounded-full shadow-sm"
                style={activeStyle}
              ></div>
            </div>

            {/* Top Row: Step 01 & Step 03 */}
            <div className="flex h-1/2 w-full items-center justify-start gap-[1vw]">
              <div className="h-full w-[22%] pt-[1vw] max-[768px]:h-fit max-[768px]:pt-[3vw]">
                <span className="subline-tag block mb-2">
                  HOW GESP GUIDES YOU
                </span>
                <h2 className="font-heading text-[2.4vw] leading-[1.05] max-[768px]:text-[6.5vw] text-[#333333] font-normal">
                  GESP <span className="highlight-italic">Process</span>
                </h2>
              </div>

              <div className="w-full flex h-full gap-x-[16vw] max-[768px]:gap-x-[36vw]">
                {topJourneyData.map((item) => (
                  <div
                    key={`top-${item.id}`}
                    className="relative h-full w-[26vw] px-[2vw] max-[768px]:flex max-[768px]:w-[65vw] max-[768px]:flex-col max-[768px]:px-[5vw]"
                  >
                    {/* Vertical Connector Line & Node */}
                    <div className="w-full absolute left-0 bottom-0 top-0 h-full">
                      <div
                        className={`size-3 max-[768px]:size-2.5 -translate-x-1/2 relative aspect-square rounded-full jd-${item.id} shadow-sm`}
                        style={activeStyle}
                      ></div>
                      <div
                        className={`h-[92%] w-[2px] bg-[#0D2153] origin-bottom rounded-full jl-${item.id}`}
                      ></div>
                    </div>

                    <div className="mt-[-0.5vw] space-y-[0.8vw] max-[768px]:mt-[-1vw]">
                      <div className="flex items-center gap-2">
                        <span className="text-[1.8vw] max-[768px]:text-[4.5vw] font-mono font-bold text-[#FAB900]">
                          {item.stepNumber}
                        </span>
                        <span className="text-[0.7vw] max-[768px]:text-[2.2vw] font-mono uppercase tracking-widest text-[#0D2153] font-bold">
                          • {item.category}
                        </span>
                      </div>
                      <h4
                        className={`title-${item.id} font-heading text-[1.8vw] leading-[1.1] text-[#333333] max-[768px]:text-[5vw] font-normal`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`description-${item.id} w-[92%] text-[0.95vw] leading-relaxed max-[768px]:w-[95%] max-[768px]:text-[3.6vw] font-light`}
                        style={mutedTextStyle}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: Step 02 & Step 04 */}
            <div className="h-1/2 flex items-center justify-start w-full">
              <div className="w-[30%] pt-[2vw] max-[768px]:pt-[3vw] max-[768px]:w-[28%] h-full">
                <p
                  className="text-[0.95vw] max-[768px]:text-[3.2vw] leading-relaxed font-light text-[#5A5751]"
                  style={mutedTextStyle}
                >
                  {periodLabel}
                </p>
              </div>

              <div className="w-full flex h-full gap-x-[18vw] ml-[8vw] max-[768px]:gap-x-[36vw] max-[768px]:ml-[8vw]">
                {bottomJourneyData.map((item) => (
                  <div
                    key={`bottom-${item.id}`}
                    className="relative h-full w-[26vw] px-[2vw] max-[768px]:w-[65vw] max-[768px]:px-[5vw]"
                  >
                    {/* Vertical Connector Line & Node */}
                    <div className="w-full absolute left-0 bottom-[-1%] h-full">
                      <div
                        className={`h-[92%] origin-top w-[2px] bg-[#0D2153] rounded-full max-[768px]:h-full jl-${item.id}`}
                      ></div>
                      <div
                        className={`size-3 max-[768px]:size-2.5 -translate-x-1/2 relative w-auto aspect-square rounded-full jd-${item.id} shadow-sm`}
                        style={activeStyle}
                      ></div>
                    </div>

                    <div className="flex h-full w-full flex-col justify-end space-y-[0.8vw] pb-[1vw]">
                      <div className="flex items-center gap-2">
                        <span className="text-[1.8vw] max-[768px]:text-[4.5vw] font-mono font-bold text-[#FAB900]">
                          {item.stepNumber}
                        </span>
                        <span className="text-[0.7vw] max-[768px]:text-[2.2vw] font-mono uppercase tracking-widest text-[#0D2153] font-bold">
                          • {item.category}
                        </span>
                      </div>
                      <h4
                        className={`title-${item.id} font-heading text-[1.8vw] leading-[1.1] text-[#333333] max-[768px]:text-[5vw] font-normal`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`description-${item.id} w-[92%] text-[0.95vw] leading-relaxed max-[768px]:w-[95%] max-[768px]:text-[3.6vw] font-light`}
                        style={mutedTextStyle}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
