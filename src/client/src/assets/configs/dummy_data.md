#Student Profile Table

CREATE TABLE students_profiles 







#FEATURED PROJECTS

INSERT INTO featured_projects (name,  participants, target_groups, img, year, description)
VALUES ('Ubuntu Learning Community (with Prison-to-College Pipeline South Africa)',
ARRAY['Nel Mary', 'Roux Daniel', 'Kleynhans CL Mej'],
ARRAY['Adults', 'Communities', 'Government: Provincia'],
'/images/projects/project-01.jpg', '2021',
'The Ubuntu Learning Community (“ULC”) is a new Stellenbosch University-prison partnership – the first of its kind in South Africa. Its aim is to rehumanise learning by focusing on learning social, ubuntu-focused dimensions – collaboration, community-building and connectedness.  It conceives of collaborative education as the “practice of freedom”​ (Paolo Freire) – a tool for transformation and empowerment. ULC has three components: an educational partnership between Stellenbosch University (SU)  and the Department of Correctional Services (DCS);  social support and reintegration for incarcerated students post-incarceration; and a student-led initiative aimed at educating and sensitising SU students (and wider community) about the incarceration system.​ The educational component entails SU students and students in prison studying together under SU academics, learning with and from each other through dialogue and the sharing of experience. The first Ubuntu Learning first short course, partnering with UNISA students in the Brandvlei Correctional Institute in Worcester in 2019, was interdisciplinary, exploring a common theme from the perspective of a variety of academic disciplines.  The reintegration component  of ULC envisages academic and social supports to aid students transitioning from prison to the community to continue their education, obtain employment, and lead stable, productive, fulfilling lives post-incarceration.  The aim is to challenge social disadvantage as a barrier to higher education learning by offering re-entry facilitation and support for incarcerated students to finish their studies / study further at SU post-release.  The student-led campus initiative component involves breaking down the barriers between universities and prisons more generally, bringing the campus to the prison but also bringing the prison to campus. The focus here is on getting students involved in sensitising and educating the community about the project, our incarceration system, the role communities need to play and the realities of this system.  The Ubuntu Learning Community is supported by Prison-to-College Pipeline (P2CP), a New York-based project  that helped inaugurate the Ubuntu Learning Community as a local P2CP-SA initiative.  The Prison-to-College Pipeline is best described as a marriage of education and prisoner reentry:  It is at once a university-level education program for incarcerated students, a reentry program for them in collaboration with a unified community, and an awareness-building program that sensitizes the community – academics, future scholars, the community at large and practitioners in a host of disciplines, particularly justice-related fields – to the needs and challenges of those incarcerated and formerly so.  Most broadly, it aims to ignite interest in education among those impacted by the criminal justice system. The Ubuntu Learning Community is a proudly South African embodiment of P2CP’S vision.As regards the educational component, unfortunately, since the COVID-19 outbreak, activities within the prison have been severely curtailed, particularly in respect of SU students entering the prison.  This meant that the 2020 short course was cut short and no Ubuntu Learning short course was offered in 2021. From the latter half of 2020, an effort was made to maintain contact with the incarcerated participants by means of online engagement.  A laptop, speakers and data were donated, which enabled a number of fruitful engagements via MS Teams and Zoom with those behind bars during 2021.  Invited speakers included Justice Edwin Cameron and Mbongiseni Mdakane, a formerly incarcerated UNISA lecturer.  Logistical issues regarding internet speed and MS Teams logins were experienced, but were mostly overcome.  It is hoped that face to face sessions will be able to resume in the near future. As regards the reintegration component, we are partnering with Prison-to-College Pipeline, and its affiliated organisation, Incarceration Nations, and also the Message Trust, to assist with reintegration of previously incarcerated Ubuntu Learning participants.  A proposal has been put to SU about the possibility of a coffee truck run by formerly incarcerated individuals being positioned on campus.  There is SU buy-in for this, but the logistics still need to be finalised.  The project will be sponsored by our international partners. During lockdown and beyond, we have kept contact with formerly incarcerated ULC members via WhatsApp and offered informal support and encouragement.As regards the student-led component, because of the limited face to face campus contact, we have nothad any ULC student meetings on campus in 2021.');

INSERT INTO featured_projects (name,  participants, target_groups, img, year, description)
VALUES ('Advancing Engaged Citizenship', ARRAY['Douglas', 'Jonathan', 'Lawrence', 'Simba'],
ARRAY['University Students'], '/images/projects/project-02.jpg', '2021',
'The purpose of this project was to create a platform where students can journey with a team of mentors to assist with the innovation of project ideas, during the conceptualization and implementation phase. It allows students to complete a standard template with prompts to answer key questions.');

INSERT INTO featured_projects (name,  participants, target_groups, img, year, description)
VALUES ('Velddrif Entrepreneurship Programme', ARRAY['Coetzee CE Dr', 'Mathee S Miss'], 
ARRAY['Adults'], '/images/projects/project-03.jpg', '2021',
'Youth Unemployment and Hopelessness are rife in Noordhoek.  Noordhoek is a sub-burb of Laaiplek. It is a historically colored area.  Laaiplek is situated right at the mouth of the Berg River.  ​The prospects for the youth in Laaiplek unfortunately have not improved much in the last decade. Jobs are in very scarce supply in the greater Laaiplek/Velddrif region.  With such significant numbers of youth unemployment it is no surprise that all sorts of social ills are part of everyday living.  For example, drug abuse and violence are common practices.  There seems to be not much hope.  Without hope, life becomes fairly meaningless.  Therefore all hands must be on deck to create hope, where hope is very elusive.  The purpose of this project will be to run/present a youth entrepreneur program twice a year focusing on around 10 identified young people (age 18 to 25) lasting about 12 weeks each.  The program will be practical as much as possible. The program will also focus on linking these young people with established businesses and organizations.  Post-program support will also be available to keep track of the successes and failures of the program.  The program will also align and work with existing NGOs within Noordhoek to pull resources and create synergies.  Working the Bergriver Municipality and the Velddrif Chamber of Business will also be relevant and significant, especially in terms of selecting the youth and mentorships.');



#TEAM

INSERT INTO team (name, role, img)
VALUES ( 'John Doe', 'Director', '/images/team/01.jpg');

INSERT INTO team (name, role, img)
VALUES ( 'Mike Doe', 'Lead Mentor', '/images/team/02.jpg');

INSERT INTO team (name, role, img)
VALUES ( 'Jane Doe', 'Mentor', '/images/team/03.jpg');

INSERT INTO team (name, role, img)
VALUES ( 'Karen Doe', 'Project Manager', '/images/team/04.jpg');


#TESTIMONIALS

INSERT INTO testimonials (name, message, img)
VALUES ('John Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at','/images/testimonials/01.jpg');

INSERT INTO testimonials (name, message, img)
VALUES ('Jonathan Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at', '/images/testimonials/02.jpg');

INSERT INTO testimonials (name, message, img)
VALUES ('Mike Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.','/images/testimonials/03.jpg');

INSERT INTO testimonials (name, message, img)
VALUES ('Lorraine Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.','/images/testimonials/04.jpg');

INSERT INTO testimonials (name, message, img)
VALUES ('Peter Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.','/images/testimonials/05.jpg');

INSERT INTO testimonials (name, message, img)
VALUES ('Carol Doe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.','/images/testimonials/06.jpg');


