import React from 'react';
import { OrgContext } from '../org.context';

import Typography from '@material-ui/core/Typography';

import { MyTable } from '../components/myTable';
import { MemberRow } from '../components/memberRow';
import { Search } from '../components/search';
import { NavButtons } from '../components/navButtons';

import { AppLayout } from '../layouts/app.layout';

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

const getMembers = (organization, limit = 5, page = 1) => {
  return fetch(
    `https://api.github.com/orgs/${organization}/members?per_page=${limit}&page=${page}`
  ).then((response) => response.json());
};

const INITIAL_PAGE = 1;
const LIMIT = 5;

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [page, setPage] = React.useState(INITIAL_PAGE);
  const { organization, setOrganization } = React.useContext(OrgContext);

  const handleRequest = () => {
    getMembers(organization, LIMIT, page).then((members) =>
      setMembers(members)
    );
  };

  React.useEffect(() => {
    handleRequest();
  }, [page]);

  return (
    <AppLayout>
      <Typography variant='h2'>
        Members from {organization.toUpperCase()}
      </Typography>

      <Search
        label='Organization'
        value={organization}
        onChange={setOrganization}
        onClick={handleRequest}
      />

      <MyTable>
        {members.map((member) => (
          <MemberRow member={member} key={member.id} />
        ))}
      </MyTable>

      <NavButtons
        initialPage={INITIAL_PAGE}
        page={page}
        setPage={setPage}
        list={members}
      />
    </AppLayout>
  );
};
