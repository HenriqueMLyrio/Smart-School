using Microsoft.AspNetCore.Mvc;
using System;
using SmartSchoolWebAPI.Data;
using System.Threading.Tasks;
using SmartSchoolWebAPI.Models;

namespace SmartSchoolWebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlunoController : ControllerBase
    {
        public IRepository Repo { get; }
        private readonly IRepository _repo;
        public AlunoController(IRepository repo)
        {
            _repo = repo;


        }
        [HttpGet]
        public async Task<IActionResult> get() {
            try
            {
                var result = await _repo.GetAllAlunosAsync(false);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }


        }

        [HttpGet("{AlunoId}")]
        public async Task<IActionResult> GetAlunoAsyncById(int AlunoId) {
            try
            {
                var result = await _repo.GetAlunoAsyncById(AlunoId, true);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }


        }

        [HttpGet("ByDisciplina/{disciplinaId}")]
        public async Task<IActionResult> GetByDiscipinaId(int disciplinaId)
        {
            try
            {
                var result = await _repo.GetAlunosAsyncByDisciplinaId(disciplinaId, false);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> post(Aluno model)
        {
            try
            {
                _repo.Add(model);

                if (await _repo.SaveChangesAsync())
                {
                    return Ok(model);
                }

            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpPut("{alunoId}")]
        public async Task<IActionResult> put(int alunoId, Aluno model)
        {
            try
            {
                var aluno = await _repo.GetAlunoAsyncById(alunoId, false);
                if (aluno == null) return NotFound();

                _repo.Update(model);

                if (await _repo.SaveChangesAsync())
                {
                    return Ok(model);
                }

            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpDelete("{alunoId}")]
        public async Task<IActionResult> delete(int alunoId)
        {
            try
            {
                var aluno = await _repo.GetAlunoAsyncById(alunoId, false);
                if (aluno == null) return NotFound();

                _repo.Delete(aluno);

                if (await _repo.SaveChangesAsync())
                {
                    return Ok("Deletado");
                }

            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

    }
}