import { Member } from './member';

interface MemberListProps {
  members: Member[];
}

export default function MemberList({ members }: MemberListProps) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Relationship
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Birth Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {members.map((member) => (
            <tr key={member.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {member.displayNickname && member.nickname ? member.nickname : `${member.firstName} ${member.surname}`}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{member.relationship}</td>
              <td className="px-6 py-4 whitespace-nowrap">{member.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{member.birthDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}