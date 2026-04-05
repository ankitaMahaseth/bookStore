import userModel from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// (Register) Create new User
export const registerUser = async (userData) => {
  //Check email exist or NOT
  const exists = await userModel.findOne({ email: userData.email });

  if (exists) {
    return { message: "User already exists. Try with another email Id" };
  } else {
    let newUser = await userModel.create(userData);
    return {
      message: "You are registered successfully",
      Name: newUser.name,
      Email: newUser.email,
    };
  }
};

// Auth user & get token
// POST /api/auth/login
//LOGIN HERE

export const loginUser = async (userData) => {
  const { email, password } = userData;
  // console.log(userData.email)
  const user = await userModel.findOne({ email }).select("+password");
  //const user = await userModel.findOne({ email }).select('+password');
  console.log(typeof password);
  console.log(typeof user.password);
  //Check USER exist or NOT
  if (!user) {
    return { message: "User not found" };
  }

  //Check PASSWORD match or NOT
  if (password === user.password) {
    return {
      name: user.name,
      token: generateToken(user._id),
    };
  } else {
    return { message: "Password do not match, Try again" };
  }
};

// Dashboard (Get User by token)

export const dashboard = async (id) => {
  try {
    const user = await userModel.findById(id);

    return `Hello ${user.name}, you are ${user.role} now.`;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Users
export const fetchAllUsers = async () => {
  try {
    return await userModel.find().lean();
  } catch (err) {
    console.log(err);
  }
};

// Get User by Id
/*export const getUserById = async (id) => {
    try{
        return await userModel.findById(id).lean();
    }catch(err){
        console.log(err)
    }
}*/

// Update User Details
/*export const updateUser = async (id, userData) => { // PATCH
    return await userModel.findByIdAndUpdate(id, userData)
}*/

// Delete User details
export const removeUser = async (id) => {
  return await userModel.findByIdAndDelete(id);
};
