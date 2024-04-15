import { Card, Image as ImageANTD } from "antd";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import programDummy from "../../../public/assets/json/program.json";

const ProgramSection = () => {
  return (
    <section className="bg-white h-full xl:h-[70vh] flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Programs</h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {programDummy.map((it, index) => (
            <Card
              className={"flex flex-col mx-6 bg-white border-1 shadow-md"}
              hoverable
              key={index}
            >
              <div className={"flex flex-row justify-between"}>
                <div
                  className={
                    "flex w-full h-[11.313rem] items-center justify-center overflow-hidden"
                  }
                >
                  <ImageANTD
                    preview={false}
                    src={`${it.program_thumbnail_url}`}
                    className="w-full h-full object-contain"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <p className={"flex items-center mt-2"}>
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ color: "#534F4F", fontSize: 14 }}
                />
                <span className={"ml-2"}>
                  {dayjs(it.created_at).format("DD MMM YYYY HH:mm A")}
                </span>
              </p>
              <div className={"mt-2 mb-4"}>
                <p className={"text-lg font-medium"}>{it.program_name}</p>
              </div>
              <p>{it?.category_description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
