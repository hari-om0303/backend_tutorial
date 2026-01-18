const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const fs = require('fs');
const bcrypt = require('bcrypt');
const privateKey = fs.readFileSync('D:\\ASM\\nodejs_expressjs_mongodb_coderdost\\ch-11-Auth-using-JWT\\private.key', 'utf8');


exports.signup = async (req, res) => {
    try {
        const user = new User(req.body);
        // const token = jwt.sign({email:req.body.email}, 'shhhh', {algorithm : 'RS256'}); // normal method of secrete key 
        const token = jwt.sign({ email: req.body.email }, privateKey, { algorithm: 'RS256' }); //using private key
        const hash = bcrypt.hashSync(req.body.password, 10);
        console.log({ hash });
        user.token = token;
        user.password = hash;

        const doc = await user.save();
        res.status(201).json(doc);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}


exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const isAuth = bcrypt.compareSync(req.body.password, user.password);

    if (!isAuth) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );

    // ❌ Do NOT save token in DB (JWT is stateless)

    res.json({ token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
