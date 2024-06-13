using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartSchool_WebAPI.Models
{
    public class Aluno
    {
        public Aluno() {}

        public Aluno(int id, string nome,string sobrenome, string Telefone) 
        {
            this.id = id;
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.Telefone = Telefone;
   
        }
            public int id { get; set; }
            public string nome { get; set; }
            public string sobrenome { get; set; }
            public string Telefone { get; set; }
    }
}