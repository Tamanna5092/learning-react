import React, { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActive = (index) => {
    setActiveIndex(index)
  };

  return (
    <div>
      <h2>Learning Accordion</h2>
      <Panel title="Paid Course" isActive={activeIndex === 0 && true} onActive={() => handleActive(0)}>
        This is a paid course. You need to pay to access the content. In this
        course, you will learn advanced topics and gain valuable skills that can
        enhance your career. Our expert instructors will guide you through each
        module with practical examples and hands-on projects.
      </Panel>
      <Panel title="Free Course" isActive={activeIndex === 1 && true} onActive={() => handleActive(1)}>
        This is a free course. You can access all the content without paying. It
        covers the basics of the subject and is perfect for beginners looking to
        get started. You will find a variety of resources, including videos,
        articles, and quizzes to help reinforce your learning.
      </Panel>
    </div>
  );
}
