using Microsoft.EntityFrameworkCore.Migrations;

namespace CrittersWeb.Migrations
{
    public partial class GameWorlds : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "registrationDate",
                table: "AspNetUsers",
                newName: "RegistrationDate");

            migrationBuilder.RenameColumn(
                name: "mailConfirmKey",
                table: "AspNetUsers",
                newName: "MailConfirmKey");

            migrationBuilder.CreateTable(
                name: "GameWorlds",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameWorlds", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Heroes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    WorldId = table.Column<int>(type: "int", nullable: true),
                    X = table.Column<int>(type: "int", nullable: false),
                    Y = table.Column<int>(type: "int", nullable: false),
                    Direction = table.Column<int>(type: "int", nullable: false),
                    Energy = table.Column<int>(type: "int", nullable: false),
                    CellsInBuffer = table.Column<int>(type: "int", nullable: false),
                    CellsBufferSize = table.Column<int>(type: "int", nullable: false),
                    MaxEnergy = table.Column<int>(type: "int", nullable: false),
                    FieldSize = table.Column<int>(type: "int", nullable: false),
                    CellsLimitToPut = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Heroes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Heroes_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Heroes_GameWorlds_WorldId",
                        column: x => x.WorldId,
                        principalTable: "GameWorlds",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SpaceArea",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WorldId = table.Column<int>(type: "int", nullable: true),
                    AreaFormData = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CellsData = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Left = table.Column<int>(type: "int", nullable: false),
                    Top = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpaceArea", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SpaceArea_GameWorlds_WorldId",
                        column: x => x.WorldId,
                        principalTable: "GameWorlds",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Heroes_UserId",
                table: "Heroes",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Heroes_WorldId",
                table: "Heroes",
                column: "WorldId");

            migrationBuilder.CreateIndex(
                name: "IX_SpaceArea_WorldId",
                table: "SpaceArea",
                column: "WorldId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Heroes");

            migrationBuilder.DropTable(
                name: "SpaceArea");

            migrationBuilder.DropTable(
                name: "GameWorlds");

            migrationBuilder.RenameColumn(
                name: "RegistrationDate",
                table: "AspNetUsers",
                newName: "registrationDate");

            migrationBuilder.RenameColumn(
                name: "MailConfirmKey",
                table: "AspNetUsers",
                newName: "mailConfirmKey");
        }
    }
}
