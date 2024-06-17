using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SmartSchoolWebAPI.Data;

namespace SmartSchoolWebAPI.Models
{
    public class AlunoDisciplina
    {
        public AlunoDisciplina() { }
        public AlunoDisciplina(int AlunoId, int DisciplinaId) 
        {
            this.DisciplinaId = DisciplinaId;
            this.AlunoId = AlunoId;
   
        }
                public Aluno Aluno { get; set; }
        public int AlunoId { get; set; }
        public Disciplina Disciplina { get; set; }
        public int DisciplinaId { get; set; }
    }
}