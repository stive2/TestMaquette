export const LOGIN_OK = (state, user) => {
  state.User.firstName = user.data.first_name
  state.User.lastName = user.data.last_name
  state.User.ID = user.data.id
  state.User.emailParrain = user.data.email_parrain
  state.User.email = user.data.email
  state.User.pays = user.data.pays
  state.User.ville = user.data.ville
  state.User.adresse = user.data.adresse
  state.User.opAssurance = user.data.op_assurance
  state.User.assure = user.data.assure
  state.User.telephone = user.data.telephone
  state.User.profile = user.data.profile
  state.User.justificatif = user.data.justificatif
  state.User.idCard = user.data.id_card
  state.loggedIn = true
}
