import React from "react";

export type Route = {
  title: string;
  url: string;
  icon: React.ReactNode;
  status?: "active" | "disabled" | "comming_soon";
};

export type Step = {
  id: string;
  value: string;
  label?: string;
};

export type CourseStatus = "in_progress" | "completed" | "not_started";

export type Course = {
  id: string;
  title: string;
  status: CourseStatus;
  description?: string;
  thumb?: string;
  price?: number;
};

export type Resource = {
  id: string;
  title: string;
  course: string;
  file?: string;
  type: ResourceType;
};

export type BreadCrumb = {
  name: string;
  label: string;
  icon?: React.ReactNode;
  active: boolean;
};

export type CourseBonus = {
  id: string;
  title: string;
  price: number;
};

export type TrustyFeedback = {
  id: string;
  img: StaticImageData | string;
  title: string;
  description: string;
};

export type CustomerThought = {
  id: string;
  name: string;
  user_avatar: StaticImageData | string;
  date: string;
  thought: string;
};

export type ResourceType = "pdf" | "mov" | "audio";
