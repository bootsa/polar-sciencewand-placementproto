const baseIconUrl = '/assets/icons'

export const types = {
    "root": {
      "shape": "circle",
      "radius": "15"
    },
    "bis": {
      "shape": "circle",
      "radius": "10"
    },
    "iis": {
      "shape": "circle",
      "radius": "8"
    },
    "fis": {
      "shape": "circle",
      "radius": "5"
    }
  }

export const nodes = [
    {
      "id": 0,
      "group": 0,
      "type": "root"
    },
    {
      "id": 101,
      "group": 1,
      "type": "bis",
      "title": "Energy",
      "description": {
        "15-18": "Energy can neither be created nor destroyed. It can only be transformed from one form to another. The transformation of energy can lead to a change in state or motion. Energy can also be converted to mass and vice versa.",
        "12-15": "When energy is transformed from one form to another, its total amount remains constant. The transfer of energy from one body (or system) to another or change in its form can cause a change in state or motion. The amount of energy transferred or transformed during a motion is called work.",
        "9-12": "Energy is what makes every change possible throughout the universe. Energy can have many faces (forms) and it can be transferred from one body or system to another. However, its total amount remains constant. It cannot be created or destroyed."
      }
    },
    {
      "id": 102,
      "group": 2,
      "type": "bis",
      "title": "Forces",
      "description": {
        "15-18": "There are four fundamental interactions / forces in nature. Gravitation, electromagnetism, strong-nuclear and weak nuclear forces. All phenomena are due to the presence of one or more of these interactions. Forces act on objects and can act at a distance through respective physical field, causing a change in motion or in the state of matter.",
        "12-15": "Gravity and electromagnetism are the two forces whose effects are most evident to us. These two forces are responsible for the majority of motions in the universe. The motion of an object depends on how a force acts on it.",
        "9-12": "When a force acts on an object it can change its shape or it can make it move. We cannot see forces but we can understand them by their effects. An object can have an effect on another through a force, either by being in contact with it or from a distance. There is a limited number of forces in our universe."
      }
    },
    {
      "id": 103,
      "group": 3,
      "type": "bis",
      "title": "Universe",
      "description": {
        "15-18": "Earth is a very small part of the universe. The Universe is comprised of billions of galaxies, each of which contains billions of stars (suns) and other celestial objects. The earth is a small part of the solar system with the Sun in its centre, which in turn is a very small part of the Universe.",
        "12-15": "The Sun is the star of our solar system and it is around 100 times larger than the Earth. The closest star to the sun is a bit over 4 light year away. Our galaxy has billions of stars, some smaller and some bigger than our Sun. There are billions of galaxies in our universe which except stars include many other types of objects as well.",
        "9-12": "Earth and the other planets orbit around the Sun. The Sun is the star of our solar system and it is around 100 times larger than the Earth. There are billions of stars like our Sun in the universe."
      }
    },
    {
      "id": 104,
      "group": 4,
      "type": "bis",
      "title": "Particles",
      "description": {
        "15-18": "All matter in the Universe is made of very small particles. They are in constant motion and the bonds between them are formed by interactions between them. Elementary particles as we know, form atoms and atoms form molecules. There is a finite number of types of atoms in the universe which are the elements in the periodic table.",
        "12-15": "There is a finite number of elements and they are all presented in the periodic table. Atoms and molecules form bonds through chemical reactions. Molecules that are based on carbon are fundamental for life and they are called organic molecules.",
        "9-12": "All matter in the universe is made of the same elementary particles called quarks and electrons. Quarks make up protons and neutrons. Protons, neutrons and electrons combine in different ways and they make different atoms (elements). Atoms make up molecules. All matter is in constant motion and depending on the intensity of the motion it can be found in three different states: solid, liquid or gas."
      }
    },
    {
      "id": 105,
      "group": 5,
      "type": "bis",
      "title": "Quantum",
      "description": {
        "15-18": "In very small scales, our world is subjected to the laws of quantum mechanics. All matter and radiation exhibit both wave and particle properties. We cannot simultaneously know the position and the momentum of a particle.",
        "12-15": "Light (electromagnetic radiation) behaves like a wave but it can also behave as a stream of particles carrying packs of energy called quanta. In small scales particles can also act as quantum waves.",
        "9-12": "Quantum mechanics studies what happens inside atoms. Matter in the microcosm behaves different than in the macrocosm."
      }
    },
    {
      "id": 106,
      "group": 6,
      "type": "bis",
      "title": "Evolution",
      "description": {
        "15-18": "Evolution is the basis for both the unity of life and the biodiversity of organisms (living and extinct). Organisms pass on genetic information from one generation to another.",
        "12-15": "All organisms have come from a common ancestor. Through mutations of the DNA, new traits are created in organisms. The more effectively adapted to the environment organisms survive and give favorable characteristics to their descendants.",
        "9-12": "Organisms change over generations and develop traits and skills that help them survive. All the genetic information of an organism is stored in the DNA which is found at the nucleus of each cell. The DNA is responsible for passing genetic information from one generation to another (inheritance)."
      }
    },
    {
      "id": 107,
      "group": 7,
      "type": "bis",
      "title": "Cells",
      "description": {
        "15-18": " Cells are the fundamental unit of life. They require a supply of energy and materials. All life forms on our planet are based on this common key component.",
        "12-15": "The cell is the basic structural and functional unit which displays the phenomenon of life. It can reproduce, respirate, develop and produce a variation of products. Plants and animals are made of cells that form organs and systems. Cells require energy which they find through organic or inorganic matter.",
        "9-12": "Every living organism is made of cells. There are many types of cells which have different purposes."
      }
    },
    {
      "id": 108,
      "group": 8,
      "type": "bis",
      "title": "Earth",
      "description": {
        "15-18": "Earth is a system of systems which influences and is influenced by life on the planet. The processes occurring within this system influence the evolution of our planet, shapes its climate and surface. The solar system also influences Earth and life on the planet.",
        "12-15": "Earth is ever-changing due to the constant flow of energy and radiation from the Sun as well as due to the unchanging processes, and principles that act on it. All living organisms affect and are affected by Earth.",
        "9-12": "Our Earth, its climate and surface is influenced by natural phenomena and by all living organisms. All living organisms are affected by everything that happens on our planet."
      }
    },
    {
      "id": 201,
      "group": 1,
      "type": "iis",
      "title": "Forms, Conservation of energy and energy transfer",
      "icon": `${baseIconUrl}/Forms_Conservation_of_energy.svg`,
      // "color": "hsl(0, 100%, 34%)",
      "description": "Energy can be transferred from an object to another or the environment when a force is acting on it. However, the total amount of energy, always remain the same. The two main forms of energy is potential energy and kinetic energy while the two forms of 'energy in transit' (or types of transfer process) is heat and work."
    },
    {
      "id": 202,
      "group": 1,
      "type": "iis",
      "title": "Energy and forces",
      "icon": `${baseIconUrl}/Energy_and_forces.svg`,
      // "color": "hsl(0, 100%, 51%)",
      "description": "Objects can interact from a distance or when in contact, through the fundamental interactions. When these interactions occur energy is transferred or transformed. Depending on the acting force, we have different forms of energy."
    },
    {
      "id": 203,
      "group": 1,
      "type": "iis",
      "title": "Energy in chemical reactions",
      "icon": `${baseIconUrl}/Energy_in_chemical_reactions.svg`,
      "description": "Energy is required for chemical reactions to occur. When a chemical reaction is triggered, energy is transformed. All living organisms transform energy form one form to another in order to be able to fuel their activities."
    },
    {
      "id": 204,
      "group": 2,
      "type": "iis",
      "title": "Types of interactions",
      "icon": `${baseIconUrl}/types_of_interactions.svg`,
      "description": "There are only four forms of interactions. Gravity, electromagnetism, the strong nuclear interaction and the weak nuclear interaction. Every motion or change of states is due to one or more of these interactions. The effects of these interaction can be observed in all scales of the universe."
    },
    {
      "id": 205,
      "group": 2,
      "type": "iis",
      "title": "Forces and motion",
      "icon": `${baseIconUrl}/forces_and_motion.svg`,
      "description": "When a force (or more) acts on an object, the object will either change its kinetic state or shape. Depending on the size and the direction of the total force the object can perform different types of motions. For objects with speed a lot small than the speed of light, the way forces act on objects is described based on Newton's laws. For objects with speeds, close to the speed of light the way forces act on objects is describe by Einstein's General theory of relativity."
    },
    {
      "id": 206,
      "group": 3,
      "type": "iis",
      "title": "Earth and the solar system",
      "icon": `${baseIconUrl}/Earth_and_solar_system.svg`,
      "description": "Earth is a small part of our solar system. The Sun is in the center of our solar system; planets and asteroids orbit around the Sun. Some planets have moons orbiting around them. The Sun is aroun 110 times larger in diameter than the Earth."
    },
    {
      "id": 207,
      "group": 3,
      "type": "iis",
      "title": "Earth's place in the universe, Celestial objects",
      "icon": `${baseIconUrl}/Celestial_objects.svg`,
      "description": "Our Solar system is a very small part of our Galaxy, which in turn is a very small part of the Universe. Stars, planets, asteroids and moons are not the only objects in the universe. Nebulas, black-holes, neutron stars, white and brown stars are also found in the universe."
    },
    {
      "id": 208,
      "group": 3,
      "type": "iis",
      "title": "The history of our universe",
      "icon": `${baseIconUrl}/history_of_the_universe.svg`,
      "description": "Our universe was born from the 'explosion' of a singular point of infinite temperature and density 13.8 billion years ago. This 'explosion' is called the big bang. Since than, our universe is expanding."
    },
    {
      "id": 209,
      "group": 4,
      "type": "iis",
      "title": "Structure,properties and function of elements (Periodic table)",
      "icon": `${baseIconUrl}/structure_properties_functions_of_elements.svg`,
      "description": "There is a finite number of elements in the universe, and they are all made up of the quarks and electrons. The number of quarks and electrons defines the behavior of each element."
    },
    {
      "id": 210,
      "group": 4,
      "type": "iis",
      "title": "Structure and properties of matter",
      "icon": `${baseIconUrl}/structure_and_properties_of_matter.svg`,
      "description": "Atoms interact through the electromagnetic force and create molecules. Molecules can include atoms of the same or different elements. Each type of molecule has its own properties which also define how it reacts with other molecules. The use and role of each type of molecules in nature is based on its properties."
    },
    {
      "id": 211,
      "group": 4,
      "type": "iis",
      "title": "Chemical reactions",
      "icon": `${baseIconUrl}/chemical_reactions.svg`,
      "description": "Chemical reactions are the processes through which atoms and/or molecules interact and are combined. There are different types of chemical reactions but they are mainly categorized depending on whether the system releases or absorbs energy."
    },
    {
      "id": 212,
      "group": 4,
      "type": "iis",
      "title": "Nuclear processes",
      "icon": `${baseIconUrl}/Nuclear_Processes.svg`,
      "description": "Nuclear processes can change the nucleus and consequently the structure of an atom. Nuclear process can release enormous amounts of energy."
    },
    {
      "id": 213,
      "group": 5,
      "type": "iis",
      "title": "Subatomic particles properties",
      "icon": `${baseIconUrl}/subatomic_particle_properties.svg`,
      "description": "Subatomic particles behave differently than matter in the macrocosm. In these scales, particles exhibit both particle and wave properties (wave-particle duality). They are also subjected to the uncertainty principle, which states that their position and momentum, cannot be measured exactly simultaneously. Interactions of subatomic particles can cause the transformation of matter into energy and vice versa by emitting or absorbing specific quanta (a minimum amount) of energy."
    },
    {
      "id": 214,
      "group": 5,
      "type": "iis",
      "title": "Phenomena and applications",
      "icon": `${baseIconUrl}/phenomena_and_applications.svg`,
      "description": "Quantum phenomena occur due to the interactions of subatomic particles according to their quantum properties and obey the laws of quantum mechanics. Some of these phenomena are used in contemporary applications like the scanning tunneling microscope and quantum computing."
    },
    {
      "id": 215,
      "group": 6,
      "type": "iis",
      "title": "Natural selection and Darwininan theory",
      "icon": `${baseIconUrl}/natural_selection.svg`,
      "description": "Organisms that are more adjusted to the environment survive and leave largest number of offspring than their less adjusted. Different organisms are selected by natural selection as the most adapted to the specific environment."
    },
    {
      "id": 216,
      "group": 6,
      "type": "iis",
      "title": "Biodiveristy",
      "icon": `${baseIconUrl}/biodiversity.svg`,
      "description": "All organisms come from a single ancestor. There is a large biodiversity in all organisms which is a result of mutations that occur in the DNA. Natural selection chooses the best adjusted organisms for the specific environment."
    },
    {
      "id": 217,
      "group": 7,
      "type": "iis",
      "title": "Structure and function of cells",
      "icon": `${baseIconUrl}/structure_and_function_of_cells.svg`,
      "description": "The cell is the basic structural and functional unit exhibiting the phenomenon of life. Cells contain organelles and core which contains the genetic material. There are eukaryotic and prokaryotic cells. They have metabolism and can transport substances such as proteins and lipids to the inside or the outside of the cell."
    },
    {
      "id": 218,
      "group": 7,
      "type": "iis",
      "title": "Growth and development of organisms",
      "icon": `${baseIconUrl}/Growth_and_development_of_organisms.svg`,
      "description": "There are unicellular and multicellular organisms. Multicellular consist of several cells forming organs and organ systems. Microorganisms are usually unicellular. Several times they cause diseases and the immune system of the organism tries to eliminate them."
    },
    {
      "id": 219,
      "group": 8,
      "type": "iis",
      "title": "Ecosystems",
      "icon": `${baseIconUrl}/ecosystems.svg`,
      "description": "Ecosystems include organisms, abiotic factors and the relationships that develop between them. Energy is transferred from one organism to another through food and matter is recycled so as to be used again in food chains."
    },
    {
      "id": 220,
      "group": 8,
      "type": "iis",
      "title": "Earth materials and structure",
      "icon": `${baseIconUrl}/Earths_material_and_structure.svg`,
      "description": "All living organisms are affected by earth's surface, its materials and natural resources. There is no life without water. Its internal structure, the move of tectonic plates and large scale system interactions determine life and hide natural hazards for the organisms."
    },
    {
      "id": 221,
      "group": 8,
      "type": "iis",
      "title": "Earth's Climate",
      "icon": `${baseIconUrl}/Earths_Climate.svg`,
      "description": "Earth's climate depends on the impact of sun but is also affected by humans. These days all living beings experience a global climate change that has multiple consequences on organisms."
    },
    {
      "id": 301,
      "group": 1,
      "type": "fis",
      "title": "Conservation and degradation of energy",
      "description": "Energy is always conserved but it can be transformed to different forms. Not all forms of energy can however produce the same amount of work. Degradation of energy occurs when a given amount of energy is transformed from one form to another that can produce less work. Heat is the most common degrade form of energy."
    },
    {
      "id": 302,
      "group": 1,
      "type": "fis",
      "title": "Heat and thermodynamics",
      "description": "Heat is a form of energy. Energy can flow from one body to another (energy in transit) in the form of heat when the two bodies in touch have temperature difference. The exchange of heat can change the internal energy of a body or/end to be consumed by the absorber as mechanical work. Thermodynamics studies the relationship between heat and other forms of energy. There are four universal laws through which thermodynamics describes the relationship between heat and other forms of energy."
    },
    {
      "id": 303,
      "group": 1,
      "type": "fis",
      "title": "Mechanical energy",
      "description": "Mechanical energy is the sum of potential energy and kinetic energy (the two main forms of energy). When in an object act only conservative forces (e.g. gravity) its mechanical energy remain constant. Elastic collisions are examples where the mechanic energy of a system is conserved."
    },
    {
      "id": 304,
      "group": 1,
      "type": "fis",
      "title": "Energy and mechanical waves",
      "description": "Mechanical waves are an oscillation of matter that transfers energy through a medium. The oscillation does not cause movement of the matter. The mechanical wave will travel until all the initial amount of energy is transferred. Sound waves and ocean waves are examples of mechanical waves."
    },
    {
      "id": 305,
      "group": 1,
      "type": "fis",
      "title": "Energy sources",
      "description": "An energy source is any physical or artificial system able to produce energy. Energy sources can be renewable (like solar energy) or non-renewable (like petroleum). They may have a low conversion efficiency (like coal or gas) or a high one (like hydropower)."
    },
    {
      "id": 306,
      "group": 1,
      "type": "fis",
      "title": "Electrical and magnetic energy",
      "description": "Electric potential energy is the energy stored due the interaction of charged particles. Electrical energy is the energy derived from electric potential energy (or kinetic energy) and is used in electric circuits. Every moving charged particle produces a magnetic field around it. The energy stored in this field is called magnetic energy."
    },
    {
      "id": 307,
      "group": 1,
      "type": "fis",
      "title": "Gravitational energy",
      "description": "Gravitational energy is the energy stored in a system of bodies with masses due to their gravitational interaction."
    },
    {
      "id": 308,
      "group": 1,
      "type": "fis",
      "title": "Radioactive decay and binding energy",
      "description": "Radioactive decay is the process by which an unstable atomic nucleus loses energy by emitting radiation. The radiation can be alpha particles, electrons, positrons or finally photons. Radioactive decay is a spontaneous process and obeys the laws of quantum theory. Binding energy is the energy that holds an atomic nucleus together due to the strong nuclear force. Each element is described by a specific amount of binding energy. The higher binding energy correspond to more stable atomic nuclei."
    },
    {
      "id": 309,
      "group": 1,
      "type": "fis",
      "title": "Energy and mass",
      "description": "Einstein's theory of special relativity shows that matter (as mass) and energy can be converted into each other according to the famous equation E = m c^2. Energy can be converted to mass (e.g. pair production) and vice versa (e.g. annihilation)"
    },
    {
      "id": 310,
      "group": 1,
      "type": "fis",
      "title": "Electromagnetic radiation and radiant energy",
      "description": "Electromagnetic radiation (light) is electromagnetic waves that propagate through space. Depending on the frequency there are many types of such waves (X-rays, Ultraviolet, Visible light, Infrared etc). Radiant energy is the energy of electromagnetic waves."
    },
    {
      "id": 311,
      "group": 1,
      "type": "fis",
      "title": "Energy in chemical processes",
      "description": "During chemical processes substances break or form bonds to create other substances. During these processes energy is either absorbed or emitted. Chemical processes are classified as endothermic or exothermic depending on whether they emit or absorb energy."
    },
    {
      "id": 312,
      "group": 1,
      "type": "fis",
      "title": "Energy in organisms",
      "description": "All living organisms require energy to survive. Organisms transform different types of energy to chemical energy, which their cells use to perform all the necessary functions for the survival of the organism."
    },
    {
      "id": 313,
      "group": 1,
      "type": "fis",
      "title": "Energy in everyday life",
      "description": "In everyday life, humans use renewable and non-renewable sources of energy to transform energy into usable forms like electrical and kinetic energy to fulfill their needs."
    },
    {
      "id": 314,
      "group": 2,
      "type": "fis",
      "title": "Gravitation and its effects",
      "description": "Gravitational force (or simpler gravity) acts between two objects due to their mass. Each object attracts any other object in the universe. The more mass the great the force of gravity. Thus in very massive objects, like planets, stars or galaxies, gravity plays they key role on their interactions and shapes their orbits and motions. The theory of General Relativity provides a unified description of gravity as a geometric property of spacetime. Very compact objects such as black holes and neutron stars are able to curve essentially the spacetime around them."
    },
    {
      "id": 315,
      "group": 2,
      "type": "fis",
      "title": "Electromagnetism and its effect",
      "description": "The electromagnetic force acts between two objects due to their electric charge. Electrism and magnetism even if initially seemed to be separated phenomena nowadays we know that they are the different aspects of a single object named electromagnetism. Electromagnetic forces are behind every single phenomenon of our daily life (e.g. breathing, walking, reading these lines), apart from the Earth's attraction that is gravity."
    },
    {
      "id": 316,
      "group": 2,
      "type": "fis",
      "title": "Strong nuclear interaction and its effect",
      "description": "The strong nuclear interaction acts on subatomic particles and it's what keeps atomic nuclei together. The strong interaction is the strongest of all interactions but it has a very short range. In distances greater than that of a proton's diameter it is already very weak to compete with the electromagnetic force."
    },
    {
      "id": 317,
      "group": 2,
      "type": "fis",
      "title": "Weak nuclear interaction and its effects",
      "description": "The weak nuclear interaction is responsible for the decay of atomic nuclei and acts on subatomic particles. The weak interaction has a key role in the creation of elements and on the fueling of stars as through nuclear fusion."
    },
    {
      "id": 318,
      "group": 2,
      "type": "fis",
      "title": "Linear motions",
      "description": "Linear motions are motions that occur in one dimension (the object is moving in a straight line). Depending on the acting forces the object can have constant or varying speed. They can be described with equations using one spatial variable plus the time variable."
    },
    {
      "id": 319,
      "group": 2,
      "type": "fis",
      "title": "2-dimensional motions",
      "description": "2-dimensional motions are motions that occur in two dimensions (the object is moving in a flat surface). Depending on the forces acting on the object, they can have constant or varying velocity. They can be described with equations using two spatial variables and one time variable."
    },
    {
      "id": 320,
      "group": 2,
      "type": "fis",
      "title": "3-dimensional motions",
      "description": "3-dimensional motions are motions that occur in three dimensions. Depending on the forces acting on the object, they can have constant or varying velocity. They can be described with equations using three spatial variables and one time variable."
    },
    {
      "id": 321,
      "group": 2,
      "type": "fis",
      "title": "Oscillations",
      "description": "An oscillation is a type of motion during which the force acting on the moving object is always opposite to the direction of the displacement from the equilibrium point. Thus, the object returns periodically to its initial position after a certain time. Oscillations can be found in many different occasions in our world, from oscillating pendulum in clocks to alternative current circuits as well as in biological, chemical, quantum mechanical and climate processes among others."
    },
    {
      "id": 322,
      "group": 2,
      "type": "fis",
      "title": "Fluids and gases in motion",
      "description": "Fluids and gasses (which together are called fluids) tend to flow easily, which causes a net motion of molecules from one point in space to another. That is why, in the contrary to the motion of solid objects, fluids change their shape and properties (such as pressure) as they move. The movements of fluids and gases are studied under fluid dynamics. Their study helps us understand many aspects of our world like the evolution of stars, ocean currents, weather patterns, plate tectonics and blood circulation."
    },
    {
      "id": 323,
      "group": 2,
      "type": "fis",
      "title": "Impacts",
      "description": "Impacts are phenomena during which two or more bodies or particles collide. Impacts occur in every scale of our universe (from comments impacting the Earth to elementary particle collisions) and they are all governed by the same principles like the conservation of momentum and the conservation of energy."
    },
    {
      "id": 324,
      "group": 2,
      "type": "fis",
      "title": "Rotation",
      "description": "Rotations are motions due to one or more forces during which objects move around a fixed axis. Rotation especially around an objects own axis (spinning) is one of the most common motions in nature. Celestial objects (like stars, planets and galaxies) as well as elementary particles (like quarks and electrons) all spin around their axis. Many objects also rotate around other ones (like the Earth rotates around the Sun or electrons around the nucleus)."
    },
    {
      "id": 325,
      "group": 2,
      "type": "fis",
      "title": "Microscopic motion",
      "description": "Particles are in constant motion in nature but they can have different speeds depending on the internal energy of the system. The internal energy of the system in turn mainly depends on the temperature of the system (the higher temperature the faster the particles move) and the electromagnetic energy between the particles, which tend to bring them together. The average velocity of the molecules of the atmosphere around us is in the order of 1600 km/h."
    },
    {
      "id": 326,
      "group": 3,
      "type": "fis",
      "title": "Earth and other planets",
      "description": "There are 8 planets in our Solar system that rotate around the Sun. The third closest planet is the Earth. The inner part of our solar system has four terrestrial (solid) planets (Mercury, Venus, Earth and Mars) while the outer part has four giant planets (Jupiter, Saturn, Uranus, Neptune) composed mainly by gas and ice. All planets are very small compared to our Sun. Our Sun makes up 99.86% of the Solar systems total mass while all planets combined along with their moons and asteroids make up only 0.14%."
    },
    {
      "id": 327,
      "group": 3,
      "type": "fis",
      "title": "The origin of our solar system",
      "description": "Our solar system originates from a cloud of interstellar gas and/or dust which started collapsing under its own gravity due to some disturbance 4.6 billion years ago. The biggest part of that gas/dust formed the early Sun while some remaining gas/dust kept orbiting around the Sun eventually forming the planets, their moons and all other smaller objects of the solar system. The cloud itself was formed by other stars which were in our neighborhood which ended their lives as supernova explosions."
    },
    {
      "id": 328,
      "group": 3,
      "type": "fis",
      "title": "Earth, Sun and the moon",
      "description": "Sun, Earth and the Moon consists a triple hierarchical system. The Earth rotates around itself, the moon rotates around Earth and the two objects rotate together around the Sun. The rotation of Earth around itself takes 24 hours and creates the day and night. The full revolution of Earth around the Sun takes a year. Finally the Moon makes a gull revolution around Earth in about 29 days. The revolution of the moon results to several phenomena on Earth with the most important one the tides."
    },
    {
      "id": 329,
      "group": 3,
      "type": "fis",
      "title": "Stars, their life and death",
      "description": "Stars like everything else in the Universe get born, evolve and finally they die. The fuel that gives them life is the nuclear fission which occur in their cores. The critical parameter that determine their life and death is their mass. Low mass stars (up to 8 times the mass of the Sun) tend to live long (up to 100 billion of years) and they die quietly forming a white dwarf. More massive stars live much sorter while their death is explosive (supernova explosion) forming a neutron star or a black hole."
    },
    {
      "id": 330,
      "group": 3,
      "type": "fis",
      "title": "Galaxies",
      "description": "Galaxies are huge neighborhoods of stars. They come in different shapes and sizes. Based on their shape are classified as spiral elliptical and anomalous. An average galaxies has approximately 100 billions stars. There are about 200 billions galaxies in the visible universe."
    },
    {
      "id": 331,
      "group": 3,
      "type": "fis",
      "title": "Planets, exoplanets",
      "description": "Planets are celestial objects much smaller than stars and they orbit around a star. Their shape is nearly round due to their own gravity but this gravity is not high enough to produce their own light (as the stars do). Around our star, the Sun, there orbiting 8 planets and among them is the Earth. Recently several hundredths of planets that rotate around other stars have been discovered. These planets are called exoplanets and some of them have been found to be residing in the habitable zone something that means that they fulfill the conditions to host life."
    },
    {
      "id": 332,
      "group": 3,
      "type": "fis",
      "title": "Moons, comets and asteroids",
      "description": "Moons, comets and asteroids are objects smaller than planets that may orbit them or orbit the parent star. Moons orbit around planets whereas comets and asteroids travel around solar systems and may occasionally hit on a moon or planet. Some asteroids may also orbit around planets."
    },
    {
      "id": 333,
      "group": 3,
      "type": "fis",
      "title": "Cosmic radiation",
      "description": "Cosmic radiation (or Cosmic Rays) is composed of very high-energy particles such as protons and atomic nuclei mainly originating outside the solar system. It is believed that these particles gained their high energy through acceleration in the shock waves that are hosted in several astrophysical objects such as supernova remnants, neutron stars and active galactic nuclei."
    },
    {
      "id": 334,
      "group": 3,
      "type": "fis",
      "title": "The big bang theory and the timeline of our universe",
      "description": "The most widely accepted theory about the origin of the universe is the big ban theory that states that the universe was created 13.8 billions of years ago when a point of infinite mass and temperature exploded. As the Universe expanded, matter began to coalesce into gas clouds, and then stars and planets. Our solar system formed about 4.5 billion years ago when the Universe was about 65% of its present size. Today, the Universe continues to expand."
    },
    {
      "id": 335,
      "group": 3,
      "type": "fis",
      "title": "Scales of our universe",
      "description": "Things in our universe can be unimaginably large or small depending with what we compare them. Earth is five billion times larger than an elephant but 1.2 millions times smaller than the Sun. The Sun it self is 700 millions times smaller than Antares a red supergiant star in the constellation of Scorpion. Antares, however, is 10^51 times smaller compared to our galaxy, the Milky Way. Finally Milky Way is 5*10^19 times smaller than our Universe."
    },
    {
      "id": 336,
      "group": 3,
      "type": "fis",
      "title": "The origin of the elements",
      "description": "The first atoms were these of Hydrogen and Helium and were formed around three minutes after the big bang. After the formation of the first stars the rest of the known natural elements (e.g. Carbon, Oxygen, Iron) are created either in the nuclei of stars or during supernova explosions through nuclear fission and fusion processes. These element are expelled back to the Universe either through the mass outflows of the stars or by the stellar explosion known as supernovae."
    },
    {
      "id": 337,
      "group": 4,
      "type": "fis",
      "title": "Elementary particles",
      "description": "Elementary particle is a particle that is not composed of other particles. The known elementary particles are divided to fermions and bosons. The fermions include the quarks and leptons which both form all the matter that we observe in the universe. The quarks are combined to make hadrons like protons and neutrons that in turn make all the atomic nuclei. The most known lepton is the electron. The bosons are known as \"force\" particles that mediate interactions among the leptons. Every one of these particles has a mirror anti-particle."
    },
    {
      "id": 338,
      "group": 4,
      "type": "fis",
      "title": "Structure of atoms and isotopes",
      "description": "Atoms have nuclei comprising of protons and neutrons while electrons orbit around the nuclei. Atoms are neutral as they contain equal number of protons and electrons. Isotopes are atoms of the same element differing only in the number of neutrons in their nuclei. Some isotopes are more stable than others."
    },
    {
      "id": 339,
      "group": 4,
      "type": "fis",
      "title": "Properties and categorization of elements, the periodic table",
      "description": "The number of protons found in their nuclei identifies elements. There is a finite number of elements in nature which are all present in the periodic table. Most elements are natural but some are man made. All of these elements are arrange in a table, named Periodic Table. They are ordered based on atomic number (number of protons), electron configurations, and recurring chemical properties."
    },
    {
      "id": 340,
      "group": 4,
      "type": "fis",
      "title": "Types of bonds",
      "description": "Electromagnetic forces are responsible for non-temporant attractions between atoms that lead to the formation of chemical bonds and the creation of molecules. There are two main types of bonds, covalent and iontic. The iontic bond is due to the electrostatic force of attraction between atoms with opposite charger while the covalent one occurs through the sharing of one or more electrons."
    },
    {
      "id": 341,
      "group": 4,
      "type": "fis",
      "title": "Macromolecules",
      "description": "Macromolecules are very large molecules comprised by thousands of atoms. Their building brick are the monomers that form a macromolecule through the process of polymerization. Macromolecules are very important for living organisms. The most popular and important macromolecules for living organisms are the DNA, RNA and Proteins."
    },
    {
      "id": 342,
      "group": 4,
      "type": "fis",
      "title": "Structure and properties of organic molecules",
      "description": "Organic molecules are those that include a main chain of carbons connected to other carbons, hydrogen, oxygen and/or ammonia. Organic molecules even if are rare on Earth, are very important as all living organisms are made up by them."
    },
    {
      "id": 343,
      "group": 4,
      "type": "fis",
      "title": "Structure and properties of inorganic molecules",
      "description": "All non-organic molecules are called inorganic molecules. Inorganic molecules do not contain carbon origin (oxides of carbon and carbonates are exceptions). Inorganic molecules are not usually found in living things but are common in nature."
    },
    {
      "id": 344,
      "group": 4,
      "type": "fis",
      "title": "States of matter",
      "description": "The three main states of matter are gas, liquid, solid and plasma. The state of a matter is determined by the comparison of the kinetic energy and the electromagnetic potential energy of the molecules they compose the object. If the kinetic energy is much larger then it dominates the object is the in gas state, if the two energies are comparable it is in the liquid state, while if the potential energy dominates then the object is solid. When matter is heat up so much that electrons escape the attraction of the nuclei and they no longer form atoms. They are basically a 'soup' of electrons and nuclei which behave collectively under their common electric field. This state is called plasma. Plasma is the state of matter that dominates the Universe."
    },
    {
      "id": 345,
      "group": 4,
      "type": "fis",
      "title": "Solutions, mixtures and their properties",
      "description": "A solution is a homogeneous mixture of two or more substances. The most abundant substance is called solvent while the rest substances of the solution are called solutes. A mixture is a combination of substances which we can separate them apart using physical processes. In a solution, the substances are dissolved while in a mixture the substances are mixed up maintaining their physical properties."
    },
    {
      "id": 346,
      "group": 4,
      "type": "fis",
      "title": "Neutralization",
      "description": "Neutralization is a chemical reaction between an acid and a base producing salt and water. When neutralization occur the pH of the solution approaches the number seven (equivalence point)."
    },
    {
      "id": 347,
      "group": 4,
      "type": "fis",
      "title": "Chemical equilibrium",
      "description": "A chemical reaction reaches equilibrium when there is a constant ratio between the concentration of the reactants and the products as the forward and reverse reactions occur at the same rate."
    },
    {
      "id": 348,
      "group": 4,
      "type": "fis",
      "title": "Redox",
      "description": "Redox comes from the combination of words reduction and oxidation. Redox is a chemical reaction that involves a transfer of electrons between two species. As results the oxidation number of a molecule, atom, or ion involving in Redox changes."
    },
    {
      "id": 349,
      "group": 4,
      "type": "fis",
      "title": "Chemical kinetics",
      "description": "Chemical kinetics is the study of rates of chemical processes. This rate can be influenced by many factors such as the nature of the reactants, the temperature, and the introduction of catalysts."
    },
    {
      "id": 350,
      "group": 4,
      "type": "fis",
      "title": "Properties and principals of reactions, formulas and equations (inorganic chemistry)",
      "description": "When substances interact through chemical processes, than new substances with different properties are formed. Chemical processes always follow the same universal principles (like the conservation of energy or charge) and can be represented using chemical formulas and equations."
    },
    {
      "id": 351,
      "group": 4,
      "type": "fis",
      "title": "Nuclear fission",
      "description": "Nuclear fission, it is the process during which an atomic nucleus splits into smaller nuclei of different elements and producing tremendous amounts of energy in the process. The difference in mass between the products and reactants is manifested as the release of large amounts of energy. It is the opposite of fusion."
    },
    {
      "id": 352,
      "group": 4,
      "type": "fis",
      "title": "Nuclear fusion",
      "description": "Nuclear fusion the process through which two or more atomic nuclei are combined to create heavier nuclei, which correspond on different elements. The difference in mass between the products and reactants is manifested as the release of large amounts of energy. Fusion of elements can occur naturally in nature in the core of stars. it is the opposite of fission."
    },
    {
      "id": 353,
      "group": 5,
      "type": "fis",
      "title": "Quanta and quantum waves",
      "description": "A quantum is the minimum amount of a quantity that can be found in nature and it cannot be broken in to smaller pieces. Energy for example can be found in nature only in amounts that are integral multiples of a minimum quantum (package) of energy. Quantum waves are waves of probability which describe the quantum state of a system."
    },
    {
      "id": 354,
      "group": 5,
      "type": "fis",
      "title": "Quantum properties",
      "description": "While in the classical world nature reveals a deterministic behavior (there can be a 100% accuracy in measurements and in predictions), in the quantum world the explanation of the phenomena can be only stochastically. That means that any quantum phenomenon can be analyzed statistically but cannot be predicted with 100% accuracy. The main properties of quantum mechanics are the quantification of energy (quanta), the wave particle duality, the uncertainty principle and the correspondence principle."
    },
    {
      "id": 355,
      "group": 5,
      "type": "fis",
      "title": "Quantum phenomena",
      "description": "Quantum phenomena are those that occur due to the interactions of subatomic particles and can have microscopic and macroscopic effects. They are quite contradictory to our everyday experience."
    },
    {
      "id": 356,
      "group": 5,
      "type": "fis",
      "title": "Macroscopic quantum phenomena and applications",
      "description": "Quantum phenomena even if dominate the atomic and subatomic word, several phenomena at the macroscopic scale reveal quantum behavior. The most outstanding examples are superfluidity and superconductivity. Quantum physics have several application in technology such as such as quantum computing, quantum sensing, quantum cryptograph and quantum imaging."
    },
    {
      "id": 357,
      "group": 6,
      "type": "fis",
      "title": "Adaptation",
      "description": "The best adapted organisms in the environmental conditions survive and leave a larger number of offspring than the less adapted ones."
    },
    {
      "id": 358,
      "group": 6,
      "type": "fis",
      "title": "DNA, Genetic information and mutations",
      "description": "DNA can replicate itself, transcribe into RNA and translate into proteins. Genetic information is recorded in genes and expressed through proteins. Mutations, occurring either accidentally during DNA replication, or due to substances or radiations, are changes in genetic information that most often lead to illness or death. But they are also very important for the process of species evolution."
    },
    {
      "id": 359,
      "group": 6,
      "type": "fis",
      "title": "Inheritance of traits",
      "description": "Genetic traits are transferred from parents to offspring and this phenomenon is called heredity. There are prevalent and residual traits, features related to sex and traits equivalent in both species. First Mendel was the one who studied heredity. Gender trees help us to study the way inherit a trait and calculate the probability that a descendant will display or not the trait."
    },
    {
      "id": 360,
      "group": 6,
      "type": "fis",
      "title": "Biodiversity and humans",
      "description": "People have a variety of attributes depending on the environment in which they live and grow and according to the genes they have inherited from their ancestors. There are traits that prevail in specific environments, such as skin color, which are an evolutionary advantage of the populations in the particular environment, and features common to all that show the common ancestor from which they come from."
    },
    {
      "id": 361,
      "group": 6,
      "type": "fis",
      "title": "Biodiversity, plants and animals",
      "description": "There is a wide variety of plants and animals in the Earth's environment that have been adapted to the conditions in which they live and reproduce, interact and are influenced by their environment and evolve through the mutations that happen randomly."
    },
    {
      "id": 362,
      "group": 6,
      "type": "fis",
      "title": "Evidence of common ancestry and diversity",
      "description": "All organisms come from a common ancestor. Through mutations and natural selection various types of organisms have been created in the course of evolution. Every environment favors the development and evolution of different species so there is a wide variety of organisms in nature."
    },
    {
      "id": 363,
      "group": 6,
      "type": "fis",
      "title": "Variations of traits",
      "description": "Not all organisms have the same genetic traits. There is differentiation depending on the environment in which the organizations live and grow. Mutations are a determining factor in creating different traits. The attributes that give survival advantage to an organism are established in the population and through evolution, if many new traits accumulate, they will create a new species."
    },
    {
      "id": 364,
      "group": 7,
      "type": "fis",
      "title": "Elements and macromolecules in cells",
      "description": "Cells consist of proteins, lipids, nucleic acids and hydrocarbons. Water plays a dominant role for the function of the cell. The cells are either prokaryotic or eukaryotic. Eukaryotic cells are evolutionary newer, possess organelles and nucleus, in which the genetic material is found, and are surrounded by cell membrane. In contrast, prokaryotes lack nucleus and are more primitive cells."
    },
    {
      "id": 365,
      "group": 7,
      "type": "fis",
      "title": "Transport of macromolecules and production of energy in different cells",
      "description": "The substances are moving through cells by active or passive transport through the cell membrane. They use energy derived from glucose burning through cellular breathing in mitochondria. Plant cells make photosynthesis through which they produce their food and oxygen that is necessary for the survival of organisms."
    },
    {
      "id": 366,
      "group": 7,
      "type": "fis",
      "title": "Information processing",
      "description": "The brain, through its numerous nerve cells, regulates all body functions and perceives changes in the environment."
    },
    {
      "id": 367,
      "group": 7,
      "type": "fis",
      "title": "Organization for matter and energy flow in organisms (food chains)",
      "description": "Organisms in nature are divided into autotrophs and heterotrophs according to their type of food. Autotrophs take energy directly from the sun, through photosynthesis, while consumers feed on either autotrophs or other heterotroph organisms. This creates food chains depending on who eats whom."
    },
    {
      "id": 368,
      "group": 7,
      "type": "fis",
      "title": "Structure and function of organisms (humans, animals, plants, microorganisms)",
      "description": "The organisms are divided in monocellular and multicellular. Monocellulars include microorganisms, fungi and bacteria and have a relatively simple structure. Multicellulars include plant and animal organisms consisting of organs and organ systems."
    },
    {
      "id": 369,
      "group": 8,
      "type": "fis",
      "title": "Cycles of matter and energy transfer in ecosystems",
      "description": "The elements from which all the organic compounds of the cells are made, are not in much quantity in nature, therefore they must be continuously recycled (cycles of matter). Energy is produced by autotrophic organisms through photosynthesis and transported through food chains at all levels of organisms."
    },
    {
      "id": 370,
      "group": 8,
      "type": "fis",
      "title": "Interdependent relationships in ecosystems",
      "description": "Organisms interdependent with each other and interact with the environment where they live. The larger the variety of organisms in an ecosystem, the more stable it is."
    },
    {
      "id": 371,
      "group": 8,
      "type": "fis",
      "title": "Ecosystems dynamics, functioning and resilience",
      "description": "Ecosystems include the study of both the organisms which they include and the interactions that are developing between them. The ecosystems may be terrestrial or aquatic, either autotrophic or heterotrophic. Energy flows through food chains and trophic pyramids."
    },
    {
      "id": 372,
      "group": 8,
      "type": "fis",
      "title": "Social interaction and group behavior",
      "description": "organisms in an ecosystem are connected in one way or another. Each population interacts with one another in a complex web of relations. There are oppositional relationships such as predation and competition and symbiotic relationships such as cooperation and parasitism."
    },
    {
      "id": 373,
      "group": 8,
      "type": "fis",
      "title": "Earth's Atmosphere",
      "description": "The atmosphere is one of Earth's most important systems. It protects life from high energy solar radiation, it stabilizes the temperature and provides living organisms with element important for their survival, like oxygen, nitrogen and carbon dioxide."
    },
    {
      "id": 374,
      "group": 8,
      "type": "fis",
      "title": "Earth's materials and systems",
      "description": "The geosphere, hydrosphere, atmosphere and biosphere are Earth's major systems. These systems interact on multiple levels (from microscopic to global size) and over very short or very long periods of time. They shape the surface of the Earth and its environment while they also affect its materials and processes. All processes occurring on Earth are due to energy flow and matter cycling within and between these systems."
    },
    {
      "id": 375,
      "group": 8,
      "type": "fis",
      "title": "Water on Earth",
      "description": "The greater part of Earth is covered by water. It moves through Earth's hydrosphere, geosphere and atmosphere in different ways (e.g. evaporation or transpiration) and shapes Earth's weather and surface. Water is the largest energy reservoir on Earth."
    },
    {
      "id": 376,
      "group": 8,
      "type": "fis",
      "title": "Internal structure, Tectonic plates and large scale system interactions",
      "description": "The morphology of the continents and the ocean's floor is formulated by the movement of tectonic plates. These movements are also responsible for the formation of most rocks and minerals within Earths crust. Earthquakes and volcano eruptions can occur due to the mobility of tectonic plates."
    },
    {
      "id": 377,
      "group": 8,
      "type": "fis",
      "title": "Biogeology",
      "description": "Living organisms affect the regions they live in. The interaction between the biosphere and other systems of Earth cause continuous changes on Earths surface and on living organisms."
    },
    {
      "id": 378,
      "group": 8,
      "type": "fis",
      "title": "Earth's surface (ocean and continents)",
      "description": "The larger part of Earth is covered by water. Weather, the motion of tectonic plates and the presence of living organisms affect the morphology of Earth's surface and cause constant changes to it."
    },
    {
      "id": 379,
      "group": 8,
      "type": "fis",
      "title": "Natural resources",
      "description": "Natural resources are vital to the existence of living organisms. Some of them are renewable (e.g. wind energy) while others are non-renewable or replaceable (e.g. fossils, minerals). Natural resources are not distributed evenly around the planet because of past geologic processes. The abundance of natural resources also determines the presence of different species of organisms and the growth of their populations."
    },
    {
      "id": 380,
      "group": 8,
      "type": "fis",
      "title": "Natural hazards",
      "description": "Natural hazards are numerous (e.g. Earthquakes, typhoons) and are due to the existence of different natural processes. Their occurrence is not equally distributed around Earth and can affect the distribution of populations."
    },
    {
      "id": 381,
      "group": 8,
      "type": "fis",
      "title": "Earth formation",
      "description": "Earth was created approximately 4.5 billion years ago when a cloud of dust and gas started collapsing under its own gravity, it began to rotate, and form our Sun. The remaining material began to form bulges of particles bound together by the force of gravity. The solar wind carried away lighter elements, like hydrogen and helium from the regions near the Sun forming terrestrial planets like Earth made of heavy, rocky materials."
    },
    {
      "id": 382,
      "group": 8,
      "type": "fis",
      "title": "The eras of Earth",
      "description": "Our planet was born 4,5 billion years ago. Because of the existence of water and oxygen life sprout and many different organisms were created. The analysis of rocks, fossils and of matter from other objects of our Solar System (e.g. the Moon and comets) can give information about Earth past. Some process occurred over long periods of time while other happened much faster. The early Earth used to be very different to the Earth we know today. Over different eras different species were created (or evolved from older ones) or became extinct."
    },
    {
      "id": 383,
      "group": 8,
      "type": "fis",
      "title": "Human impact on Earth",
      "description": "The presence of humans, the processes they deploy to produce usable forms of energy and the exploitation of natural resources have an effect on Earth's morphology and climate as well as on other living organisms. Human activities have caused global climate change and the extinction of species and thus have affected the biodiversity of our planet."
    },
    {
      "id": 384,
      "group": 8,
      "type": "fis",
      "title": "Global climate change",
      "description": "Global climate change is a product of human industrial and agricultural activities and of the over-exploitation of natural resources (especially non-renewable ones)."
    },
    {
      "id": 385,
      "group": 8,
      "type": "fis",
      "title": "Weather and climate",
      "description": "Weather exists due to the Earth atmosphere's non-stop effort to reach a thermodynamic equilibrium. It is primarily driven by the receiving electromagnetic radiation from the Sun. Different areas on Earth have different weather conditions which vary over time. These conditions make up the area's climate."
    },
    {
      "id": 386,
      "group": 8,
      "type": "fis",
      "title": "Earth and the Sun",
      "description": "Earth's existence is directly related to the Sun. The Sun is the source of life for our planet as it is its only source of energy. The distance between Earth and the Sun is also crucial to the existence of life as it defines the average temperatures on the planet. The motions of Earth around the Sun cause different phenomena like seasons and the succession of day and night. Earth will be destroyed when the Sun reaches the end of its lifetime in approximately 5 billion years."
    }
  ]

export const links = [
    {
      "source": 0,
      "target": 101,
      "value": 3
    },
    {
      "source": 0,
      "target": 102,
      "value": 3
    },
    {
      "source": 0,
      "target": 103,
      "value": 3
    },
    {
      "source": 0,
      "target": 104,
      "value": 3
    },
    {
      "source": 0,
      "target": 105,
      "value": 3
    },
    {
      "source": 0,
      "target": 106,
      "value": 3
    },
    {
      "source": 0,
      "target": 107,
      "value": 3
    },
    {
      "source": 0,
      "target": 108,
      "value": 3
    },
    {
      "source": 101,
      "target": 201,
      "value": 2
    },
    {
      "source": 101,
      "target": 202,
      "value": 2
    },
    {
      "source": 101,
      "target": 203,
      "value": 2
    },
    {
      "source": 102,
      "target": 204,
      "value": 2
    },
    {
      "source": 102,
      "target": 205,
      "value": 2
    },
    {
      "source": 103,
      "target": 206,
      "value": 2
    },
    {
      "source": 103,
      "target": 207,
      "value": 2
    },
    {
      "source": 103,
      "target": 208,
      "value": 2
    },
    {
      "source": 104,
      "target": 209,
      "value": 2
    },
    {
      "source": 104,
      "target": 210,
      "value": 2
    },
    {
      "source": 104,
      "target": 211,
      "value": 2
    },
    {
      "source": 104,
      "target": 212,
      "value": 2
    },
    {
      "source": 105,
      "target": 213,
      "value": 2
    },
    {
      "source": 105,
      "target": 214,
      "value": 2
    },
    {
      "source": 106,
      "target": 215,
      "value": 2
    },
    {
      "source": 106,
      "target": 216,
      "value": 2
    },
    {
      "source": 107,
      "target": 217,
      "value": 2
    },
    {
      "source": 107,
      "target": 218,
      "value": 2
    },
    {
      "source": 108,
      "target": 219,
      "value": 2
    },
    {
      "source": 108,
      "target": 220,
      "value": 2
    },
    {
      "source": 108,
      "target": 221,
      "value": 2
    },
    {
      "source": 201,
      "target": 301,
      "value": 1
    },
    {
      "source": 201,
      "target": 302,
      "value": 1
    },
    {
      "source": 201,
      "target": 303,
      "value": 1
    },
    {
      "source": 201,
      "target": 304,
      "value": 1
    },
    {
      "source": 201,
      "target": 305,
      "value": 1
    },
    {
      "source": 202,
      "target": 306,
      "value": 1
    },
    {
      "source": 202,
      "target": 307,
      "value": 1
    },
    {
      "source": 202,
      "target": 308,
      "value": 1
    },
    {
      "source": 202,
      "target": 309,
      "value": 1
    },
    {
      "source": 202,
      "target": 310,
      "value": 1
    },
    {
      "source": 203,
      "target": 311,
      "value": 1
    },
    {
      "source": 203,
      "target": 312,
      "value": 1
    },
    {
      "source": 203,
      "target": 313,
      "value": 1
    },
    {
      "source": 204,
      "target": 314,
      "value": 1
    },
    {
      "source": 204,
      "target": 315,
      "value": 1
    },
    {
      "source": 204,
      "target": 316,
      "value": 1
    },
    {
      "source": 204,
      "target": 317,
      "value": 1
    },
    {
      "source": 205,
      "target": 318,
      "value": 1
    },
    {
      "source": 205,
      "target": 319,
      "value": 1
    },
    {
      "source": 205,
      "target": 320,
      "value": 1
    },
    {
      "source": 205,
      "target": 321,
      "value": 1
    },
    {
      "source": 205,
      "target": 322,
      "value": 1
    },
    {
      "source": 205,
      "target": 323,
      "value": 1
    },
    {
      "source": 205,
      "target": 324,
      "value": 1
    },
    {
      "source": 205,
      "target": 325,
      "value": 1
    },
    {
      "source": 206,
      "target": 326,
      "value": 1
    },
    {
      "source": 206,
      "target": 327,
      "value": 1
    },
    {
      "source": 206,
      "target": 328,
      "value": 1
    },
    {
      "source": 207,
      "target": 329,
      "value": 1
    },
    {
      "source": 207,
      "target": 330,
      "value": 1
    },
    {
      "source": 207,
      "target": 331,
      "value": 1
    },
    {
      "source": 207,
      "target": 332,
      "value": 1
    },
    {
      "source": 207,
      "target": 333,
      "value": 1
    },
    {
      "source": 208,
      "target": 334,
      "value": 1
    },
    {
      "source": 208,
      "target": 335,
      "value": 1
    },
    {
      "source": 208,
      "target": 336,
      "value": 1
    },
    {
      "source": 209,
      "target": 337,
      "value": 1
    },
    {
      "source": 209,
      "target": 338,
      "value": 1
    },
    {
      "source": 209,
      "target": 339,
      "value": 1
    },
    {
      "source": 210,
      "target": 340,
      "value": 1
    },
    {
      "source": 210,
      "target": 341,
      "value": 1
    },
    {
      "source": 210,
      "target": 342,
      "value": 1
    },
    {
      "source": 210,
      "target": 343,
      "value": 1
    },
    {
      "source": 210,
      "target": 344,
      "value": 1
    },
    {
      "source": 210,
      "target": 345,
      "value": 1
    },
    {
      "source": 211,
      "target": 346,
      "value": 1
    },
    {
      "source": 211,
      "target": 347,
      "value": 1
    },
    {
      "source": 211,
      "target": 348,
      "value": 1
    },
    {
      "source": 211,
      "target": 349,
      "value": 1
    },
    {
      "source": 211,
      "target": 350,
      "value": 1
    },
    {
      "source": 212,
      "target": 351,
      "value": 1
    },
    {
      "source": 212,
      "target": 352,
      "value": 1
    },
    {
      "source": 213,
      "target": 353,
      "value": 1
    },
    {
      "source": 213,
      "target": 354,
      "value": 1
    },
    {
      "source": 214,
      "target": 355,
      "value": 1
    },
    {
      "source": 214,
      "target": 356,
      "value": 1
    },
    {
      "source": 215,
      "target": 357,
      "value": 1
    },
    {
      "source": 215,
      "target": 358,
      "value": 1
    },
    {
      "source": 215,
      "target": 359,
      "value": 1
    },
    {
      "source": 216,
      "target": 360,
      "value": 1
    },
    {
      "source": 216,
      "target": 361,
      "value": 1
    },
    {
      "source": 216,
      "target": 362,
      "value": 1
    },
    {
      "source": 216,
      "target": 363,
      "value": 1
    },
    {
      "source": 217,
      "target": 364,
      "value": 1
    },
    {
      "source": 217,
      "target": 365,
      "value": 1
    },
    {
      "source": 218,
      "target": 366,
      "value": 1
    },
    {
      "source": 218,
      "target": 367,
      "value": 1
    },
    {
      "source": 218,
      "target": 368,
      "value": 1
    },
    {
      "source": 219,
      "target": 369,
      "value": 1
    },
    {
      "source": 219,
      "target": 370,
      "value": 1
    },
    {
      "source": 219,
      "target": 371,
      "value": 1
    },
    {
      "source": 219,
      "target": 372,
      "value": 1
    },
    {
      "source": 220,
      "target": 373,
      "value": 1
    },
    {
      "source": 220,
      "target": 374,
      "value": 1
    },
    {
      "source": 220,
      "target": 375,
      "value": 1
    },
    {
      "source": 220,
      "target": 376,
      "value": 1
    },
    {
      "source": 220,
      "target": 377,
      "value": 1
    },
    {
      "source": 220,
      "target": 378,
      "value": 1
    },
    {
      "source": 220,
      "target": 379,
      "value": 1
    },
    {
      "source": 220,
      "target": 380,
      "value": 1
    },
    {
      "source": 220,
      "target": 381,
      "value": 1
    },
    {
      "source": 220,
      "target": 382,
      "value": 1
    },
    {
      "source": 221,
      "target": 383,
      "value": 1
    },
    {
      "source": 221,
      "target": 384,
      "value": 1
    },
    {
      "source": 221,
      "target": 385,
      "value": 1
    },
    {
      "source": 221,
      "target": 386,
      "value": 1
    }
  ]