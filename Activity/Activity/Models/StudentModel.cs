namespace Activity.Models
{
    public class StudentModel
    {
        private int _id;

        public int id {  get
            {
                return _id;
            }
            set; }
    {
        public string? RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}
