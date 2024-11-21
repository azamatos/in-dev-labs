import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class UpdateTodoDto {
  @IsOptional()
  @IsString({ message: 'Content must be a string' })
  content?: string;

  @IsOptional()
  @IsBoolean({ message: 'isCompleted must be a boolean' })
  isCompleted?: boolean;
}
