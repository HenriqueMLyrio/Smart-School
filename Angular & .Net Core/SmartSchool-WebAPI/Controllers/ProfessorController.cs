using Microsoft.AspNetCore.Mvc;

namespace SmartSchool_WebAPI.Controllers
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