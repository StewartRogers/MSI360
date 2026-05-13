import type { RiskFactor } from "../types";

export const reportAssets = {
  icons: {
    alert: "/icons/alert.png",
    awkwardPosture: "/icons/awkward-posture.png",
    calendar: "/icons/calendar.png",
    carrierBag: "/icons/carrier-bag.png",
    circleFive: "/icons/circle-five.png",
    circleFour: "/icons/circle-four.png",
    circleOne: "/icons/circle-one.png",
    circleSix: "/icons/circle-six.png",
    circleThree: "/icons/circle-three.png",
    circleTwo: "/icons/circle-two.png",
    contactStress: "/icons/contact-stress.png",
    environmental: "/icons/env-factors.png",
    force: "/icons/force.png",
    highPriority: "/icons/high-priority.png",
    info: "/icons/info.png",
    mediumPriority: "/icons/medium-priority.png",
    people: "/icons/people.png",
    repetition: "/icons/repetition.png",
    reviewPriority: "/icons/review-priority.png",
    shield: "/icons/shield.png",
    worker: "/icons/worker.png",
    workerHelmet: "/icons/worker-helmet.png"
  },
  images: {
    hierarchyOfControls: "/images/hierarchy-of-controls.png"
  }
} as const;

export const categoryIconByFactor: Record<RiskFactor, string> = {
  contact_stress: reportAssets.icons.contactStress,
  force: reportAssets.icons.force,
  awkward_posture: reportAssets.icons.awkwardPosture,
  repetition: reportAssets.icons.repetition,
  environmental: reportAssets.icons.environmental
};
