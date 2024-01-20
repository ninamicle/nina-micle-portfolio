import React from "react";
import SectionHeader from "./SectionHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="timetine">
      <SectionHeader color="accent" title="Debugging temporale" />
      <VerticalTimeline lineColor="" className="verticalCustomLine">
        {experiencesData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background: "#061A23",
                  boxShadow: "none",
                  border: "1px solid #1F5F5B",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #1F5F5B",
                }}
                date={item.date}
                dateClassName={"textWhite"}
                icon={item.icon}
                iconStyle={{
                  background: "#061A23",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-200">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
