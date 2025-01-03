import { useState } from 'react';
import Header from './components/Header';
import { Member } from './components/member';
import MemberForm from './components/MemberForm';
import SuccessMessage from './components/SuccessMessage';
import MemberList from './components/MemberList';

function App() {
  const [members, setMembers] = useState<Member[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleAddMember = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleMemberSubmit = async (newMember: Omit<Member, 'id'>) => {
    try {
      const response = await fetch('http://localhost:3000/api/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMember),
      });

      if (response.ok) {
        const savedMember: Member = await response.json();
        setMembers((prevMembers) => [...prevMembers, savedMember]);
        setShowSuccess(true);
        setShowForm(false);
      } else {
        const error = await response.json();
        alert(`Failed to add member: ${error.message || 'Unknown error'}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(`Failed to add member: ${error.message}`);
      } else {
        alert('An unknown error occurred');
      }
    }
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto p-4">
        <button
          onClick={handleAddMember}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Member
        </button>

        {showForm && (
          <MemberForm onSubmit={handleMemberSubmit} onClose={handleCloseForm} />
        )}

        {showSuccess && (
          <SuccessMessage onClose={handleCloseSuccessMessage} />
        )}

        <MemberList members={members} />
      </div>
    </div>
  );
}

export default App;
