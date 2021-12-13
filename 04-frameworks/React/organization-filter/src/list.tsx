import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import { OrgContext } from './org.context';

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

  const handlePreviousPage = () => setPage((prevPage) => prevPage - 1);
  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  React.useEffect(() => {
    handleRequest();
  }, [page]);

  return (
    <>
      <h2>Hello from List page</h2>
      <h3>{organization.toUpperCase()}</h3>
      <input
        type='text'
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
      />
      <button type='button' onClick={handleRequest}>
        Search
      </button>
      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>
                <img src={member.avatar_url} style={{ width: '5rem' }} />
              </td>
              <td>
                <span>{member.id}</span>
              </td>
              <td>
                <Link to={generatePath('/detail/:id', { id: member.login })}>
                  {member.login}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type='button'
        onClick={handlePreviousPage}
        disabled={page <= INITIAL_PAGE}
      >
        Previous page
      </button>
      <button
        type='button'
        onClick={handleNextPage}
        disabled={page >= members.length}
      >
        Next page
      </button>
    </>
  );
};
