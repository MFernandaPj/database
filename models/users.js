const usersModel = {
    getAll: `
    SELECT
        *
    FROM 
       users    
       `,

       getByID: `
       SELECT
          *
       FROM
          users
        WHERE
          id=?
       `,
      addRow: `
       INSERT INTO
            Users(
               username,
               email,
               password,
               name,
               lastname,
               phone_number,
               role_id,
               id_active
            )
         VALUES (
            ?,?,?,?,?,?,?,?
         )
       `,
       
       getByUsername:`
       SELECT
           id
       FROM
           Users
      WHERE 
           username=?
       `,
      getByEmail: `
      SELECT
          id
     FROM
           Users
     WHERE 
          email=?
  `,

  UpdateRow:`
    UPDATE
         Users
    SET  
      username = ?,
      email = ?,
      password = ?,
      name = ?,
      lastname = ?,
      phone_number = ?,
      role_id = ?,
      id_active = ?
   WHERE
          id=?  
  `, 
   DeleteRow:`
      UPDATE 
          Users
      SET
         id_active=0
      WHERE
         id=?
   `, 
   /* 
   updateRow:`
       UPDATE
    Users
    SET
          username = ?,
      email = ?,
      password = ?,
      name = ?,
      lastname = ?,
      phone_number = ?,
      role_id = ?,
      id_active = ?
    WHERE
          id=?  
    `
   */


};
module.exports = usersModel;