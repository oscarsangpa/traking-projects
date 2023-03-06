import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    token: {
      type: String,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(SALT_ROUNDS)
  this.password = await bcrypt.hash(this.password, salt)


})

const User = mongoose.model('User', userSchema);
export default User;
