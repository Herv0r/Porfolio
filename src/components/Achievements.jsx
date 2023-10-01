import React, { Suspense } from "react";
import { achievementsList } from "../constants";
import AnimatedNumbers from "react-animated-numbers"; // Asegúrate de importar AnimatedNumbers correctamente

const LazyAnimatedNumbers = React.lazy(() => import("react-animated-numbers"));

const AchievementsSection = () => {
  return (
    <div className="static hidden lg:block lg:px-4 xl:gap-16 mt-28 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-[white] text-[30px] font-bold flex flex-row">
                {achievement.prefix}
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyAnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-[white] text-4x1 font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        fiction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                </Suspense>
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
