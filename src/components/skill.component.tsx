import { useEffect, useState } from "react";

interface TSkill {
  skills: string[];
}

export const Skills: React.FC<TSkill> = ({ skills }) => {
  const [isLoggin, setLogin] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLogin(true);
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <div aria-label="skill">
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>

      {/* 
      <div aria-label="button-syncronous">
        {isLoggin ? (
          <button>Start learning</button>
        ) : (
          <button>Login to learning</button>
        )}
      </div> */}

      <div aria-label="button-asyncronous">
        {isLoggin ? (
          <button>Start learning</button>
        ) : (
          <button>Login to learning</button>
        )}
      </div>
    </div>
  );
};
