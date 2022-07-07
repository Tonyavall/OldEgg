const router = require('express').Router();
const { Users } = require('../models');

//end point of /profile
router.get('/profile', async (req, res) => {
  try {
    const userData = await Users.findOne({
      where: {
        user_id: req.session.user_id
      }
    });

    if (!userData) {
      return res.status(404).json({
        message: 'This user ID does not exist. Please enter a valid user ID!',
      });
    }
    // Render data from userData to myProfile.handlebars
    const users = userData.get({ plain: true });
    res.render('myProfile', {
      users,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    return res.status(500).json(err);
  }
}
);


module.exports = router;
