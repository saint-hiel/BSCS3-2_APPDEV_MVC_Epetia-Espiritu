namespace MVC_Application.Models
{
    public class ProfileModel
    {
        public string Name { get; set; } = "";
        public int Age { get; set; } = 0;
        public string Course { get; set; } = "";
        public string About { get; set; } = "";
        public List<string> Skills { get; set; } = new List<string>();
        public List<ProjectModel> Projects { get; set; } = new List<ProjectModel>();
    }

    public class ProjectModel
    {
        public string Title { get; set; } = "";
        public string Description { get; set; } = "";
        public string Link { get; set; } = "";

    }
}
