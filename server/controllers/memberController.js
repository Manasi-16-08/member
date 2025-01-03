import { Member } from '../models/Member.js';

export const createMember = async (req, res) => {
  try {
    // Log the incoming request body to inspect the data
    console.log('Incoming request body:', req.body);

    // Create a new member with the incoming request body data
    const newMember = new Member(req.body);

    // Save the new member to the database
    await newMember.save();

    // Respond with the saved member
    res.status(201).json(newMember);
  } catch (error) {
    // Log any server-side errors for debugging
    console.error('Server error:', error);

    // Handle any other errors that may occur
    res.status(400).json({ message: 'Error creating member', error: error.message });
  }
};
