using Microsoft.AspNetCore.Mvc;

namespace SmartSchoolWebAPI.Controllers
{ 
    [ApiController]
    [Route("api/[controller]")]
    public class ProfessorController : ControllerBase
    {
        [HttpGet]
        public IActionResult get(){
            return Ok("Henrique");
        }
    }
}