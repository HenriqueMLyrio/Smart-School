using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartSchool_WebAPI.Models
{
    public class Professor
    {
        public Professor() {}
        public Professor(int id, string nome ) 
        {
            this.id = id;
            this.nome = nome;
   
        }
            public int id { get; set; }
            public string nome { get; set; }
            public IEnumerable<Disciplina> disciplinas { get; set; }
    }
}