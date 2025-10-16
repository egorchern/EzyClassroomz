using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EzyClassroomz.Library.Entities
{
    public class User
    {
        [Key]
        public long Id { get; set; }
        [Required]
        [MaxLength(256)]
        public required string Name { get; set; }
        [Required]
        [MaxLength(256)]
        public required string Email { get; set; }
        [Required]
        [MaxLength(256)]
        public required string PasswordHash { get; set; }

        /// <summary>
        /// Parameterless constructor for EF Core.
        /// </summary>
        public User()
        {
        }
        
        /// <summary>
        /// Constructor to create a new user with required fields.
        /// </summary>
        /// <param name="name"></param>
        /// <param name="email"></param>
        /// <param name="passwordHash"></param>
        public User(string name, string email, string passwordHash)
        {
            Name = name;
            Email = email;
            PasswordHash = passwordHash;
        }
    }
}
