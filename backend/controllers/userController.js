import * as userService from '../services/userService.js';

// Create (Register) new user (POST METHOD)
export const registerUser = async (req, res) => {
    try {
        const user= await userService.registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Login user (POST METHOD)
export const loginUser = async (req, res) => {
    try {
        // const { email, password } = req.body;
        const user= await userService.loginUser(req.body);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// User Dashboard 
export const dashboard = async (req, res) => {
    try {
        const user = await userService.dashboard(req.user.id);
        if (!user) {
            return res.status(204).json({ message: 'user Not Found' })
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}

// Get All users (GET METHOD)
export const getAllUsers = async (req, res) => {
    try {
        const users = await userService.fetchAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Get user By Id (GET METHOD)
/*export const getuserById = async (req, res) => {
    try {
        const user = await userService.getuserById(req.params.id);
        if (!user) {
            return res.status(204).json({ message: 'user Not Found' })
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}*/

// Update user Details
/*export const updateuser = async (req, res) => {
    try {
        const isUpdated = await userService.updateuser(req.params.id, req.body);
        if (!isUpdated) {
            res.status(204).json({ message: 'user Not Found' })
        } else {
            res.status(200).json({ message: 'user Updated Successfully' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}*/

// Delete user (DELETE)
export const deleteUser = async (req, res) => {
    try {
        const isDeleted = await userService.removeUser(req.params.id);
        if (!isDeleted) {
            res.status(204).json({ message: 'user Not Found' })
        } else {
            res.status(200).json({ message: 'user Deleted Successfully' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
