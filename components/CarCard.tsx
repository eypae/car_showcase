"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { carProps } from "@/types";
import { CustomButton } from ".";

interface CarCardProps {
  car: carProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  return <div className="car-card group">Car Card</div>;
};

export default CarCard;
