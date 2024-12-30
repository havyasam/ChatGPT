import React, { useState,useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import { BsPaperclip } from "react-icons/bs";
import { PiToolboxDuotone } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { HiPaperClip } from "react-icons/hi";
import '../App.css'
import { set } from "mongoose";

const App = () => {
  
  const [inputMessage, setInputMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  // const [text, SetText] = useState("")
  const [showEmoji, setEmoji] = useState(false)
  let timer;

 

  const apiKey = process.env.REACT_APP_SECRET
  

  if (!apiKey) {
    console.error("Error: API key is not provided. Please set it directly in the code.");
    return <p>Error: API key is not set.</p>;
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) {
      alert("Please enter a message.");
      
      return;
    }

   
    setAnimatedText("")
    
    setLoading(true);
    if(setLoading) {
      setEmoji(false)
      
    }
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [
              {text: "name : havyas\ndob : 25 2 2002\nSKILLS : java c\ncollege : canara enginerring college"},
            ],
          },
          
          {
            role: "user",
            parts: [
              {text: "Whenever user search for my particular details they should get\nName: Havyas A M\nDOB : 25 02 2002 (TIME 5:00AM)\n\nContact:\n\nMobile: +91 9353984110\nEmail: havyasagaltha@gmail.com\nLinkedIn: linkedin.com/in/havyas1/\nGitHub: github.com/havyasam\nLeetCode: leetcode.com/u/havyas_am/around 350 problems/\n\nAbout Me\nHello there! 👋\nI'm Havyas, a 21-year-old Computer Science Engineering undergrad and an enthusiastic problem solver. I'm currently diving into the dynamic fields of Software Development, Web Development, and Cross-Platform App Development. Passionate about building innovative solutions, I strive to solve complex real-world challenges as a Full Stack Developer. I share my knowledge through projects, articles, and community interactions, and aim to leave a positive impact through technology.\n\nEducation\nCanara Engineering College, Mangalore, India\nBachelor of Engineering in Computer Science (Dec. 2021 – Present)\nCGPA: 7.74\nK S Gowda Pre-University College, Ninthikal, Karnataka\nPre-University Course - PCMB (Jun. 2018 – May. 2020)\nPercentage: 78%\nK S Gowda Higher Primary School, Ninthikal, Karnataka\nSecondary Education (Jun. 2015 – May. 2018)\nPercentage: 85%\n\nTechnical Skills\nProgramming Languages: Java, JavaScript, C, C++, SQL (MySQL)\nBackend: Node.js, Express, EJS, MongoDB, REST APIs\nFrontend: React.js, React Native, Bootstrap, Tailwind CSS, HTML, CSS\nOther Skills: OOPs, Computer Networks, Operating Systems\nDeveloper Tools: Git, Docker, VS Code, Postman\n\nProjects\nChronic Disease Prediction (Sep 2024 – Nov 2024)\nTech Stack: Python, React.js, Random Forest, SVM\nDeveloped a platform to predict probabilities for diabetes, kidney disease, and cardiovascular disease.\nBuilt a dynamic React.js frontend for intuitive user input and disease-specific analysis.\nDeployed machine learning models (Random Forest and SVM), achieving 92% accuracy in predictions.\nOptimized the backend for real-time predictions and visualized results for better user engagement.\nEdu-Connect (Jan 2024 – Feb 2024)\nTech Stack: React.js, Node.js, Express.js, MySQL\nBuilt a parent-teacher communication app, enabling 100% attendance tracking and progress monitoring.\nDesigned a centralized information hub with integrated calendar functionalities, reducing communication delays by 40%.\nEnhanced backend performance to improve data retrieval by 25%.\nEnChat (Nov 2023 – Jan 2024)\nTech Stack: Node.js, Express.js, Socket.IO, HTML, CSS\nDeveloped a secure real-time messaging platform with end-to-end encryption, ensuring user privacy.\nImproved message delivery speed by 70% with seamless Socket.IO-based communication.\nEnhanced data privacy by implementing zero-knowledge encryption, handling 10,000+ active users and 5,000+ sensitive conversations daily.\n\nAchievements and Experience\nInternships:\n\nDregal I Pvt. Ltd.:\nCompleted a 2-week internship, gaining hands-on experience in React.js for intuitive frontend development.\nQSpiders Pvt. Ltd.:\nCompleted training on C and Data Structures (Oct. 26 – Nov. 10, 2023).\nWorkshops and Trainings:\n\nConducted React Native sessions for 3rd-year CSE students at Canara Engineering College.\nLed an Introduction to Backend and Blockchain workshop for 130+ students.\n\nCourses and Certifications\nFull Stack Development (Udemy):\nComprehensive training on both frontend and backend technologies, including blockchain basics, mastering 5+ programming languages.\nDSA Basics (HackerRank):\nAchieved a certificate in Analytical Thinking, showcasing proficiency in arrays, strings, and essential algorithms.\nHTML, CSS, and JavaScript for Web Developers (Coursera):\nCompleted foundational web development training.\n\nextra \ntype of person : Too kind😂 and funny\nfavourite food :Kori Rotti🤤\nfavourite Icecream : Chocolate😋\nyounger brother name : vinyas A M\nmother name : Nayana\nFather name : Mohana\nclose friend : Dishanth(nick BVC)\nFriends : Ashwin Shenoy, Akshay K M , Lasya , Nidhi, Kunal , Pavan, Abhishek Mankude, Kishan Prakash, Yathin, Manju, Karthik D S\nfavourite game : Cricket and favourite cricket player Virat Kohli\nfavourite ipl team : RCB\nweight : 52 kg\nheight : 172cm\nwhat i do at free time (hobby): crafts and designs\ngirlfriend : Error 404 not found\n\n\nbloodgroup : My blood group is O(+ve)\nUSN : My use is 4CB21CS034"},
            ],
          },
          
          {
            role: "user",
            parts: [
              {text: "Hello there! 👋 I'm Havyas A M, born on 25th February 2002 at 5:00 AM, a 21-year-old Computer Science Engineering undergraduate at Canara Engineering College, Mangalore, India. Currently pursuing my Bachelor of Engineering in Computer Science, I’ve maintained a CGPA of 7.74. My primary focus is on Software Development, Web Development, and Cross-Platform App Development, with a passion for solving complex problems through innovative technology. I'm proficient in several programming languages like Java, JavaScript, C, C++, and SQL (MySQL), and skilled in backend technologies such as Node.js, Express.js, and MongoDB, as well as frontend technologies including React.js, React Native, Bootstrap, Tailwind CSS, HTML, and CSS. I've worked on impactful projects, such as developing the Chronic Disease Prediction platform (Sep 2024 – Nov 2024), where I built a dynamic React.js frontend and deployed Random Forest and SVM models, achieving 92% accuracy in predicting diseases like diabetes, kidney disease, and cardiovascular disease. Another project, Edu-Connect (Jan 2024 – Feb 2024), was a parent-teacher communication app built with React.js, Node.js, Express.js, and MySQL that improved data retrieval by 25% and helped track attendance and progress. Additionally, I worked on EnChat (Nov 2023 – Jan 2024), a secure messaging platform using Node.js, Express.js, and Socket.IO, which facilitated end-to-end encryption and served 10,000+ active users daily, with a 70% improvement in message delivery speed. Throughout my journey, I’ve completed internships and gained hands-on experience at Dregal I Pvt. Ltd., where I worked on React.js for frontend development, and at QSpiders Pvt. Ltd., where I completed training on C and Data Structures. I also led workshops, such as conducting React Native sessions for 3rd-year CSE students at Canara Engineering College, and hosting an Introduction to Backend and Blockchain workshop for 130+ students. In terms of certifications, I have completed courses like Full Stack Development (Udemy), DSA Basics (HackerRank), and HTML, CSS, and JavaScript for Web Developers (Coursera). Outside of work, I’m a kind and funny person, with a love for biryani and chocolate ice cream. My family includes my mother, Nayana, father, Mohana, and younger brother, Vinyas A M, and I’m fortunate to have close friends like Dishanth (BVC), Ashwin Shenoy, Akshay K M, Lasya, Nidhi, Kunal, Pavan, Abhishek Mankude, Kishan Prakash, Yathin, Manju, and Karthik D S. When I'm not coding, I enjoy playing cricket (my favorite player is Virat Kohli), and I cheer for RCB in the IPL. I'm 172 cm tall, weigh 52 kg, and in my free time, I love to indulge in crafts and designs. Lastly, my relationship status humorously reads Error 404: Girlfriend Not Found 😅, but that doesn’t stop me from enjoying life and pursuing my passion for technology."},
            ],
          },
          
        ],
      });
      const result = await chatSession.sendMessage(inputMessage);
      const responseText = result.response.text();

      // Animate the response text
      typeAnimation(responseText);
      setEmoji(true)
    } catch (error) {
      console.error("Error during API call:", error.message);
      setAnimatedText("Error fetching the response. Please try again.");
    } finally {
      setLoading(false);
      setInputMessage('')
      
      
    }
  };

  const typeAnimation = (text) => {
    let i = -1;

    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setAnimatedText((prev) => prev + text.charAt(i))
        i++;
      } else {
        clearInterval(typeInterval); 
      }
    }, 5);
  };


  return (
    <div class="bg-bodygrey  w-full h-[751px]">
      
       <div class='w-900px h-[300px]' >
        <div class = ' overflow-y-auto '>
        <div class = "w-[630px] h-[620px] text-white ml-[345px]">
          
        {loading ? (
    <div class='float-right inline-block bg-textgrey text-right rounded-[22px] px-4 py-2 shadow-md text-white'><p>{inputMessage}</p></div> 
  ) : (
    <>
     {showEmoji && (
          <div className=" overflow-y-auto   ml-[-70px] mb-[-30px] pt-[30px] text-[27px] font-bold">
           <div class=" overflow-y-auto flex-none ml-[17px] mt-[30px] border-[1.4px] border-textgrey rounded-full w-[32px] h-[32px] bg-bodygrey"><svg width="18" height="18" viewBox="0 0 41 41" color='rgb(183,183,183)' fill="none" xmlns="http://www.w3.org/2000/svg" class=" ml-[6px] mt-[6px]" role="img"><text x="-9999" y="-9999">ChatGPT</text><path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor"></path></svg></div>
          </div>
        )}
        
    <ReactMarkdown className="markdown">{animatedText}</ReactMarkdown>
    
    </>
  )}
        </div>
        </div>
      </div>
      <div class = " w-[320px] pl-[326px] mt-[336px]">
      {/* <BsPaperclip  color='white' class = 'absolute mt-[53px] ml-4 text-lg font-bold'/> */}
      < PiToolboxDuotone color='white' class = 'absolute mt-[52px] ml-12  text-[27px] font-bold'/>
     
      <svg width="24" height="24" color='white' class = 'absolute mt-[53px] ml-4 text-lg font-bold' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z" fill="currentColor"></path></svg>
      <svg width="24" height="24" viewBox="0 0 24 24" color='white' class = 'absolute mt-[52px] ml-[88px]  text-[25px] font-bold' fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9851 4.00291C11.9933 4.00046 11.9982 4.00006 11.9996 4C12.001 4.00006 12.0067 4.00046 12.0149 4.00291C12.0256 4.00615 12.047 4.01416 12.079 4.03356C12.2092 4.11248 12.4258 4.32444 12.675 4.77696C12.9161 5.21453 13.1479 5.8046 13.3486 6.53263C13.6852 7.75315 13.9156 9.29169 13.981 11H10.019C10.0844 9.29169 10.3148 7.75315 10.6514 6.53263C10.8521 5.8046 11.0839 5.21453 11.325 4.77696C11.5742 4.32444 11.7908 4.11248 11.921 4.03356C11.953 4.01416 11.9744 4.00615 11.9851 4.00291ZM8.01766 11C8.08396 9.13314 8.33431 7.41167 8.72334 6.00094C8.87366 5.45584 9.04762 4.94639 9.24523 4.48694C6.48462 5.49946 4.43722 7.9901 4.06189 11H8.01766ZM4.06189 13H8.01766C8.09487 15.1737 8.42177 17.1555 8.93 18.6802C9.02641 18.9694 9.13134 19.2483 9.24522 19.5131C6.48461 18.5005 4.43722 16.0099 4.06189 13ZM10.019 13H13.981C13.9045 14.9972 13.6027 16.7574 13.1726 18.0477C12.9206 18.8038 12.6425 19.3436 12.3823 19.6737C12.2545 19.8359 12.1506 19.9225 12.0814 19.9649C12.0485 19.9852 12.0264 19.9935 12.0153 19.9969C12.0049 20.0001 11.9999 20 11.9999 20C11.9999 20 11.9948 20 11.9847 19.9969C11.9736 19.9935 11.9515 19.9852 11.9186 19.9649C11.8494 19.9225 11.7455 19.8359 11.6177 19.6737C11.3575 19.3436 11.0794 18.8038 10.8274 18.0477C10.3973 16.7574 10.0955 14.9972 10.019 13ZM15.9823 13C15.9051 15.1737 15.5782 17.1555 15.07 18.6802C14.9736 18.9694 14.8687 19.2483 14.7548 19.5131C17.5154 18.5005 19.5628 16.0099 19.9381 13H15.9823ZM19.9381 11C19.5628 7.99009 17.5154 5.49946 14.7548 4.48694C14.9524 4.94639 15.1263 5.45584 15.2767 6.00094C15.6657 7.41167 15.916 9.13314 15.9823 11H19.9381Z" fill="currentColor"></path></svg>
      <div class ='absolute '> <button onClick ={handleSendMessage}  ><svg width="29" height="29" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute mt-[32.5px] ml-[634px] rounded-full bg-white ${
          inputMessage.trim()
            ? "bg-white hover:bg-zinc-300"
            : "bg-zinc-400 cursor-not-allowed"
        }`} class="icon-2xl absolute mt-[32.5px] ml-[634px] rounded-full "><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z" fill="currentColor"></path></svg></button></div>
        <input
          placeholder="Message ChatGPT"
          rows="5"
          cols="50"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" ) { 
              e.preventDefault(); 
              handleSendMessage();
              
              
            }
          }}
          class="bg-textgrey rounded-[22px] w-[673px] h-[88px] px-[22px] pb-[42px] text-white border-none outline-none"
        />
       
       
      </div>
      <p class ='pl-[527px] pt-[5px] text-txtclr text-[11px]'>ChatGPT can make mistakes. Check important info.</p>
     
    </div>
  );
};

export default App;
