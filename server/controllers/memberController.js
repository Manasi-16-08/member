import { Member } from '../models/Member.js';
import Joi from 'joi';
 
const memberSchema = Joi.object({
  relationship: Joi.string().valid('Child', 'Spouse', 'Parent', 'Sibling').required(),
  biological: Joi.boolean().required(),
  firstName: Joi.string().required(),
  middleName: Joi.string().allow(''),
  surname: Joi.string().required(),
  nickname: Joi.string().allow(''),
  displayNickname: Joi.boolean().optional(),  // Explicitly include displayNickname
  status: Joi.string().valid('Living', 'Deceased').required(),
  birthDate: Joi.date().optional(),
  birthPlace: Joi.string().allow(''),
  currentPlace: Joi.string().allow('')
}).unknown(true);  // Allow other unknown properties globally
 
export const createMember = async (req, res) => {
  try {
    // Log the incoming request body to inspect the data
    console.log('Incoming request body:', req.body);
 
    // Validate the request body against the schema
    const { error, value } = memberSchema.validate(req.body);
 
    if (error) {
      // Log the specific validation error messages
      console.error('Validation error details:', error.details);
 
      // Detailed error message
      const validationErrors = error.details.map(err => ({
        message: err.message,
        path: err.path
      }));
 
      return res.status(400).json({
        message: 'Validation error',
        errors: validationErrors
      });
    }
 
    // Create a new member from the validated data
    const newMember = new Member(value);
 
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
