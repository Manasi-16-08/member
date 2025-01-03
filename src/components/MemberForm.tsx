import { useState } from 'react';
import { Member } from './member';

interface MemberFormProps {
  onSubmit: (member: Omit<Member, 'id'>) => void;
  onClose: () => void;
}

export default function MemberForm({ onSubmit, onClose }: MemberFormProps) {
  const [formData, setFormData] = useState({
    relationship: '',  // Updated field name from 'relationshipType' to 'relationship'
    biological: true,
    firstName: '',
    middleName: '',
    surname: '',
    nickname: '',
    displayNickname: false,
    status: 'Living' as 'Living' | 'Deceased',
    birthDate: '',
    birthPlace: '',
    currentPlace: ''
  });
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Member Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            X
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <button type="button" className="flex items-center gap-2 text-blue-600">
              <span className="text-2xl">+</span>
              Add a profile picture
            </button>
          </div>

          {/* Dropdown for Relationship Type */}{/* Dropdown for Relationship Type */}
<div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Relationship <span className="text-red-500">*</span>
  </label>
  <select
    value={formData.relationship}
    onChange={(e) => setFormData({ ...formData,relationship: e.target.value })}
    className="w-full px-3 py-2 border rounded"
    required
  >
    <option value="">Select Relationship Type</option>
    <option value="Spouse">Spouse</option>
    <option value="Child">Child</option>
    <option value="Parent">Parent</option>
    <option value="Sibling">Sibling</option>
    <option value="Friend">Friend</option>
  </select>
</div>

          {/* Dropdown for Biological or Non-Biological */}
          <div>
            <select
              value={formData.biological ? "Biological" : "Non-Biological"}
              onChange={(e) => setFormData({ ...formData, biological: e.target.value === "Biological" })}
              className="w-full px-3 py-2 border rounded"
            >
              <option>Biological</option>
              <option>Non-Biological</option>
            </select>
          </div>

          {/* Other input fields remain the same */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Middle Name
            </label>
            <input
              type="text"
              value={formData.middleName}
              onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Surname<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.surname}
              onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nickname
            </label>
            <input
              type="text"
              value={formData.nickname}
              onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={formData.displayNickname}
              onChange={(e) => setFormData({ ...formData, displayNickname: e.target.checked })}
              className="mr-2"
            />
            <label>Display nickname on tree instead of full name</label>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={formData.status === 'Living'}
                  onChange={() => setFormData({ ...formData, status: 'Living' })}
                  className="mr-2"
                />
                Living
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={formData.status === 'Deceased'}
                  onChange={() => setFormData({ ...formData, status: 'Deceased' })}
                  className="mr-2"
                />
                Deceased
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Birth Date</label>
            <input
              type="date"
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Birth Place</label>
            <input
              type="text"
              value={formData.birthPlace}
              onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Current Place</label>
            <input
              type="text"
              value={formData.currentPlace}
              onChange={(e) => setFormData({ ...formData, currentPlace: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
