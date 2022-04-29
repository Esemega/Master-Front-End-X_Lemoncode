import React from 'react';

interface OrgContextModel {
  organization: string;
  setOrganization: (organization: string) => void;
}

export const OrgContext = React.createContext<OrgContextModel>(null);

//Persistir y exponer los datos del contexto con un Provider
export const OrgProvider: React.FC = (props) => {
  const { children } = props;

  const [organization, setOrganization] = React.useState('lemoncode');

  //   React.useEffect(() => {
  //     setOrganization('lemoncode');
  //   }, []);
  return (
    <OrgContext.Provider value={{ organization, setOrganization }}>
      {children}
    </OrgContext.Provider>
  );
};
