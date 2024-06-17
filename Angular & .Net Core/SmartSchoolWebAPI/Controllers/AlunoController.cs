using Microsoft.AspNetCore.Mvc;
using System;
using SmartSchoolWebAPI.Data;
using System.Threading.Tasks;

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
        public async Task<IActionResult> get(){
            try
            {
                var result = await _repo.GetAllAlunosAsync(true);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            
        }

            [HttpGet("{AlunoId}")]
        public async Task<IActionResult> GetAlunoAsyncById(int AlunoId){
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

    }
}