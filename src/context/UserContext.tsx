import { createContext, useContext, useState } from 'react';

interface UserContextInterface {
  children: React.ReactNode;
}

interface UserNameContextInterface {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

export const UserNameContext = createContext<UserNameContextInterface>({
  userName: '',
  setUserName: () => {},
});

export function useUserName() {
  return useContext(UserNameContext);
}

export function UserNameProvider({ children }: UserContextInterface) {
  const [userName, setUserName] = useState("");

  const value = { userName, setUserName};

  return (
    <UserNameContext.Provider value={value} >
      {children}
    </UserNameContext.Provider>
  );
}
