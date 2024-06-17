using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using SmartSchoolWebAPI.Data;

namespace SmartSchoolWebAPI.Models
{
    public class Aluno
    {
        public Aluno() {}

        public Aluno(int id, string nome,string sobrenome, string Telefone) 
        {
            this.Id = id;
            this.Nome = nome;
            this.Sobrenome = sobrenome;
            this.Telefone = Telefone;
   
        }
            public int Id { get; set; }
            public string Nome { get; set; }
            public string Sobrenome { get; set; }
            public string Telefone { get; set; }

            public IEnumerable<AlunoDisciplina> AlunoDisciplinas{ get; set; }
    }
}