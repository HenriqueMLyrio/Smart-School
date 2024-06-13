using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartSchool_WebAPI.Models
{
    public class Professor
    {
        public Professor() {}
        public Professor(int id, string nome ,string disciplina) 
        {
            this.id = id;
            this.disciplina = disciplina;
            this.nome = nome;
   
        }
            public int id { get; set; }
            public string nome { get; set; }
            public string disciplina { get; set; }
    }
}