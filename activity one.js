const getUser = (id) => {
    return new Promise((resolve, reject) => {
      if (id) {
        resolve({ name: "Ali", skills: ["HTML", "CSS"] });
      } else {
        reject("Invalid ID");
      }
    });
  };
  
  const displayUser = async () => {
    try {
      const user = await getUser(1);
      const { name, skills } = user;
      const updatedSkills = [...skills, "JavaScript"];
  
      console.log(`User: ${name}`);
      console.log(`Skills: ${updatedSkills.join(", ")}`);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };
  
  displayUser();