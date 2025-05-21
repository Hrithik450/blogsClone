"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col lg:flex-row font-Inter justify-between gap-8 lg:gap-20 px-4 sm:px-8 md:px-12 lg:px-15 py-10 md:pt-20 bg-[#fdf9f4] text-black">
      {/* Left side */}
      <div className="space-y-4 md:space-y-6 flex-5">
        <Button
          variant="outline"
          className="px-4 py-1 text-sm bg-[#F7F2E9] flex justify-center items-center w-max"
        >
          <Phone className="text-black" />
          <p className="text-[#535144] font-semibold"> CONTACT US</p>
        </Button>
        <h2 className="text-xl sm:text-3xl md:text-4xl max-sm:max-w-xs max-w-2xl font-semibold leading-snug">
          Your perfect project won't build itself—but we can help! Contact us
          today and let's bring your vision to life.
        </h2>
        <div className="border-b-2 pb-4 md:pb-5">
          <h3 className="text-[#97958F] font-semibold text-sm md:text-base">
            Hotline:
          </h3>
          <div className="my-1 md:my-2">
            <p className="text-xl md:text-2xl">(555) 123-45679</p>
            <p className="text-xl md:text-2xl">(555) 124-27834</p>
          </div>
        </div>
        <div className="border-b-2 pb-4 md:pb-5">
          <h3 className="text-[#97958F] font-semibold text-sm md:text-base">
            Email:
          </h3>
          <p className="text-xl md:text-2xl my-1 md:my-2">
            architectured@email.com
          </p>
        </div>
        <div className="border-b-2 pb-4 md:pb-5">
          <h3 className="text-[#97958F] font-semibold text-sm md:text-base">
            Address:
          </h3>
          <p className="text-xl md:text-2xl my-1 md:my-2">
            256 Eastern Street, Beside TNT Bridge,
            <br />
            Stateburg, Texas, 4784
          </p>
        </div>
        <div className="border-b-2 pb-4 md:pb-5">
          <h3 className="text-[#97958F] font-semibold text-sm md:text-base">
            Social Media:
          </h3>
          <ul className="space-y-1 my-1 md:my-2">
            {[
              "X",
              "Linkedin",
              "Facebook",
              "Instagram",
              "Youtube",
              "Pinterest",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-xl md:text-2xl decoration-none hover:text-orange-500 group inline-flex gap-2 items-center"
                >
                  <p>{item}</p>
                  <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-2">
                    »
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right side */}
      <form className="space-y-4 md:space-y-6 mt-8 lg:mt-0 flex-3 text-[#1B1B17]">
        <p className="text-xl md:text-2xl leading-tight mb-6 md:mb-10">
          Got big plans but not sure where to start? Don't worry—just share
          what's on your mind, and we'll handle the rest. The sooner you fill
          this out, the sooner we can get started on something amazing!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm md:text-md font-medium text-[#362E1B] mb-1 md:mb-2"
            >
              Name
            </label>
            <Input
              id="name"
              placeholder="Jane Smith"
              defaultValue="Jane Smith"
              className="w-full bg-[#F7F2E9] border-[#E0E0E0] rounded-xs px-3 py-4 md:py-6 placeholder:text-[#9999AE] focus:border-orange-500 focus:ring-0"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm md:text-md font-medium text-[#362E1B] mb-1 md:mb-2"
            >
              Phone
            </label>
            <Input
              id="phone"
              placeholder="(123) 456-7890"
              defaultValue="(123) 456-7890"
              className="w-full bg-[#F7F2E9] border-[#E0E0E0] rounded-xs px-3 py-4 md:py-6 placeholder:text-[#9999AE] focus:border-[#4B4B4B] focus:ring-0"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm md:text-md font-medium text-[#362E1B] mb-1 md:mb-2"
          >
            Email
          </label>
          <Input
            id="email"
            placeholder="jane@framer.com"
            defaultValue="jane@framer.com"
            className="w-full bg-[#F7F2E9] border-[#E0E0E0] rounded-xs px-3 py-4 md:py-6 placeholder:text-[#9999AE] focus:border-[#4B4B4B] focus:ring-0"
          />
        </div>
        <div>
          <label
            htmlFor="projectType"
            className="block text-sm md:text-md font-medium text-gray-700 mb-1 md:mb-2"
          >
            Project type
          </label>
          <Select>
            <SelectTrigger
              id="projectType"
              className="w-full bg-[#F7F2E9] border-[#E0E0E0] rounded-xs px-3 py-4 md:py-6 text-left
                       [&>span]:text-[#A1A1A1] [&>span]:!text-sm md:[&>span]:!text-base focus:border-[#4B4B4B] focus:ring-0"
            >
              <SelectValue placeholder="Select..." />{" "}
            </SelectTrigger>
            <SelectContent className="bg-white border-[#E0E0E0] rounded-md shadow-lg">
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="interior">Interior Design</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="location"
              className="block text-sm md:text-md font-medium text-[#362E1B] mb-1 md:mb-2"
            >
              Location
            </label>
            <Input
              id="location"
              placeholder="City, State"
              className="w-full bg-[#F7F2E9] border-[#E0E0E0] rounded-xs px-3 py-4 md:py-6 placeholder:text-[#9999AE] focus:border-[#4B4B4B] focus:ring-0"
            />
          </div>
          <div>
            <label
              htmlFor="budget"
              className="block text-sm md:text-md font-medium text-[#362E1B] mb-1 md:mb-2"
            >
              Budget
            </label>
            <Input
              id="budget"
              placeholder="Enter your budget"
              className="w-full bg-[#F7F2E9] border-[#E0E0E0] rounded-xs px-3 py-4 md:py-6 placeholder:text-[#9999AE] focus:border-[#4B4B4B] focus:ring-0"
            />
          </div>
          <div>
            <label
              htmlFor="projectSize"
              className="block text-sm md:text-md font-medium text-[#362E1B] mb-1 md:mb-2 min-w-[max-content]"
            >
              Project Size
            </label>
            <Input
              id="projectSize"
              placeholder="e.g., 1500"
              className="w-full bg-[#F7F2E9] border-[#E0E0E0] rounded-xs px-3 py-4 md:py-6 placeholder:text-[#9999AE] focus:border-[#4B4B4B] focus:ring-0"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="startDate"
              className="block text-sm md:text-md font-medium text-[#362E1B] mb-1 md:mb-2 min-w-[max-content]"
            >
              Preferred Start Date
            </label>

            <div className="relative">
              <Input
                id="startDate"
                type="calender"
                placeholder="dd-mm-yyyy"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) =>
                  e.target.value === "" ? (e.target.type = "text") : null
                }
                className="w-full bg-[#F7F2E9] border-[#E0E0E0] rounded-xs px-3 py-4 md:py-6 placeholder:text-[#9999AE] focus:border-[#4B4B4B] focus:ring-0"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="completionDate"
              className="block text-sm md:text-md font-medium text-[#362E1B] mb-1 md:mb-2 min-w-[max-content]"
            >
              Desired Completion Date
            </label>
            <div className="relative">
              <Input
                id="completionDate"
                type="calender"
                placeholder="dd-mm-yyyy"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) =>
                  e.target.value === "" ? (e.target.type = "text") : null
                }
                className="w-full bg-[#F7F2E9] border-[#E0E0E0] rounded-xs px-3 py-4 md:py-6 placeholder:text-[#9999AE] focus:border-[#4B4B4B] focus:ring-0"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm md:text-md font-medium text-[#362E1B] mb-1 md:mb-2"
          >
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Write your message here"
            rows={4}
            className="w-full bg-[#F7F2E9] border-[#E0E0E0] rounded-xs px-3 py-4 md:py-6 placeholder:text-[#9999AE] focus:border-[#4B4B4B] focus:ring-0 resize-y"
          />
        </div>
        <Button
          type="submit"
          className="bg-[#E9762E] hover:bg-[#D56B2A] text-black w-full py-4 md:py-6 rounded-xs text-sm md:text-md cursor-pointer"
        >
          Request Free Estimate
        </Button>
      </form>
    </div>
  );
}
