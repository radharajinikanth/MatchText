using System;
using Microsoft.AspNetCore.Mvc;
using FindMatch.Services;

namespace FindMatch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        private ITextMatchService _textMatchService;

        public HomeController(ITextMatchService TextMatchService)
        {
            if (TextMatchService == null)
                throw new ArgumentNullException("TextMatchService");

            _textMatchService = TextMatchService;
        }

        protected ITextMatchService TextMatchService
        {
            get
            {
                _textMatchService = _textMatchService ?? new TextMatchService();
                return _textMatchService;
            }
            private set { _textMatchService = value; }
        }

        [HttpGet("FindMatch")]
        public string FindMatch([FromQuery] string text, [FromQuery] string subText)
        {
            var result = TextMatchService.FindMatches(text, subText);
            return result;
        }
    }           
}