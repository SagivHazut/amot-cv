import React, { useState } from "react";
import { getProjectById } from "../assets/projectsController.js";
import ProjectsNavigator from "./ProjectsNavigator.jsx";
import GalleryGrid from "./GalleryGrid.jsx";
import SectionLayout from "./SectionLayout.jsx";
import HeroSection from "./HeroSection.jsx";
import FullWidthImageSection from "./FullWidthImageSection.jsx";
import TwoImageGrid from "./TwoImageGrid.jsx";

const Project2 = () => {
  const project = getProjectById(2); // Force load project 2 for Boilit
  const [selectedJourney, setSelectedJourney] = useState("before");

  if (!project) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Project Loading...
          </h2>
          <p className='text-gray-600'>
            If this persists, there may be an issue with the project data.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='h-full bg-white text-gray-900 overflow-y-auto'>
      {/* SECTION 1: Hero Section - Uses project.heroImage and project.title */}
      <section className='relative h-132 bg-gray-100 mb-20'>
        <img
          src={project.heroImage}
          alt={project.title}
          className='w-full h-full object-cover'
        />
      </section>
      <div className='max-w-6xl mx-auto px-8'>
        {/* SECTION 2: Overview Section - Uses project.overview */}
        <SectionLayout title='Overview'>
          <p className='text-gray-800 leading-relaxed text-lg font-light'>
            {project.overview}
          </p>
        </SectionLayout>

        {/* SECTION 3: Scrollable Pattern - Uses project.scrollablePattern */}
        <section className='mb-20 py-12 w-full'>
          <div className='flex-shrink-0  w-full h-full object-cover'>
            <video
              src={project.scrollablePattern}
              className='w-full h-full object-cover rounded-lg shadow-lg'
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
          </div>
        </section>
        {/* SECTION 4: Challenge Section - Uses project.challenge */}
        <SectionLayout title='The Challenge'>
          <p className='text-gray-800 leading-relaxed text-lg font-light'>
            {project.challenge}
          </p>
        </SectionLayout>

        {/* SECTION 5: Project Goals Section - Uses project.projectGoals */}
        <SectionLayout title='Project Goals'>
          <div className='space-y-8'>
            {project.projectGoals.map((goal, index) => (
              <div key={index}>
                <span className='font-bold text-lg text-gray-900 block mb-1'>
                  {goal.title}
                </span>
                <span className='text-gray-800 text-base font-normal block'>
                  {goal.description}
                </span>
              </div>
            ))}
          </div>
        </SectionLayout>

        {/* SECTION 6: Logo & UI Mockups - Uses project.logoBoilit and project.uiMockups */}
        <TwoImageGrid
          leftImage={project.logoBoilit}
          rightImage={project.uiMockups}
          leftAlt='Logo'
          rightAlt='UI Mockups'
        />

        {/* SECTION 7: User Research Section - Uses project.userResearch */}
        <SectionLayout title='User Research'>
          <div className='space-y-8'>
            <div>
              <span className='font-bold text-lg text-gray-900 block mb-4'>
                {project.userResearch.whoAreUsers.title}
              </span>
              <p className='text-gray-800 text-base font-normal mb-4'>
                {project.userResearch.whoAreUsers.description}
              </p>
              <p className='text-gray-800 text-base font-normal mb-2'>
                i found some Common problems included:
              </p>
              <ul className='list-disc pl-6 text-gray-800 text-base font-normal mb-4'>
                {project.userResearch.whoAreUsers.problems.map(
                  (problem, index) => (
                    <li key={index}>{problem}</li>
                  )
                )}
              </ul>
            </div>
            <div>
              <span className='font-bold text-lg text-gray-900 block mb-4'>
                {project.userResearch.mainPersona.title}
              </span>
              <p className='text-gray-800 text-base font-normal'>
                {project.userResearch.mainPersona.description}
              </p>
            </div>
          </div>
        </SectionLayout>

        {/* SECTION 8: Research Data Image - Uses project.researchData */}
        <section className='mb-20'>
          <div className='grid grid-cols-1 gap-12'>
            <img
              src={project.researchData}
              alt='Research Data'
              className='w-full h-auto rounded-lg'
            />
          </div>
        </section>

        {/* SECTION 9: User Journey Toggle - Uses project.userJourney */}
        <section className='py-20 flex flex-col items-left'>
          <div className='flex mb-8'>
            <button
              className={`px-8 py-4 text-lg font-medium rounded-tl-lg rounded-bl-lg border border-black border-r-0 focus:outline-none transition-colors duration-200 ${
                selectedJourney === "before"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedJourney("before")}
            >
              Before - User journey
            </button>
            <button
              className={`px-8 py-4 text-lg font-medium rounded-tr-lg rounded-br-lg border border-black focus:outline-none transition-colors duration-200 ${
                selectedJourney === "after"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedJourney("after")}
            >
              After - User journey
            </button>
          </div>
          <div className='w-full flex justify-center'>
            {selectedJourney === "before" ? (
              <img
                src={project.userJourney.beforeImage}
                alt={project.userJourney.beforeAlt}
                className='w-full max-w-5xl rounded-lg shadow-lg bg-white'
              />
            ) : (
              <img
                src={project.userJourney.afterImage}
                alt={project.userJourney.afterAlt}
                className='w-full max-w-5xl rounded-lg shadow-lg bg-white'
              />
            )}
          </div>
        </section>

        {/* SECTION 10: Design Solution Section - Uses project.designSolution */}
        <SectionLayout title='Design Solution'>
          <div className='space-y-4'>
            <span className='font-bold text-lg text-gray-900 block mb-1'>
              {project.designSolution.title}
            </span>
            <span className='text-gray-800 text-base font-normal block'>
              {project.designSolution.description}
            </span>
          </div>
        </SectionLayout>

        {/* SECTION 11: Another Scrollable Pattern - Uses project.scrollablePattern */}
        <FullWidthImageSection
          image={project.scrollablePattern}
          alt='User Journey Pattern'
        />

        {/* SECTION 12: Israeli Design Context - Uses project.israeliDesign */}
        <div className='my-8' style={{ width: "68%", margin: "auto" }}>
          <span className='font-bold text-lg text-gray-900 block mb-1'>
            {project.israeliDesign.title}
          </span>
          <span className='text-gray-800 text-base font-normal block'>
            {project.israeliDesign.description}
          </span>
        </div>

        {/* SECTION 13: Location Context + Interface Preview - Uses project.locationContext and project.interfacePreview */}
        {project.locationContext && (
          <section style={{ width: "70%", margin: "auto" }}>
            <div className='grid grid-cols-1 md:grid-cols-2 p-1'>
              <img
                src={project.locationContext[0]}
                alt='Location Context 1'
                className='w-full h-64 p-1 object-cover rounded-lg'
              />
              <img
                src={project.locationContext[1]}
                alt='Location Context 2'
                className='w-full h-64 p-1 object-cover rounded-lg'
              />
            </div>

            <div className='flex justify-center items-center w-full p-1'>
              <img
                src={project.interfacePreview}
                alt='App Interface Preview'
                className='w-full h-96 object-cover rounded-xl shadow-2xl'
              />
            </div>
          </section>
        )}

        {/* SECTION 14: Takeaways Section - Uses project.takeaways */}
        <SectionLayout title='Takeaways'>
          <div className='text-gray-900 text-lg font-normal mb-8'>
            {project.takeaways.mainText}
          </div>
          <div className='mt-8'>
            <span className='block mb-2'>It taught me how to balance:</span>
            <ul className='list-disc pl-6'>
              {project.takeaways.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>
        </SectionLayout>

        {/* SECTION 15: Gallery/Sketches Section - Uses project.sketches */}
        <section className='mb-20'>
          <GalleryGrid
            images={
              project.sketches
                ? project.sketches.map((src, i) => ({
                    src,
                    alt: `Sketch ${i + 1}`,
                  }))
                : []
            }
            columns={3}
            aspect='aspect-[3/4]'
            gap='gap-8'
          />
        </section>

        {/* SECTION 16: Project Navigation Footer */}
        <ProjectsNavigator currentProjectId={2} />
      </div>
    </div>
  );
};

export default Project2;
