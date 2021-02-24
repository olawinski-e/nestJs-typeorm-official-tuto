import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';

@Controller('others')
export class OthersController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll() {
    return 'This action returns all coffees';
  }

  @Get('query')
  findAllQuery(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action returns coffees with pagination. ${limit}, offset: ${offset}`;
  }

  /**
   * do not use
   * @param response
   */
  @Get('res')
  findAllRes(@Res() response) {
    response
      .status(200)
      .send('This action returns all coffees, but as a response');
  }

  @Get(':id')
  findOneOtherWay(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  /**
   * do not use
   * @param params
   */
  @Get('h/:id')
  findOneWay(@Param() params) {
    return `This action returns #${params.id} coffee`;
  }

  /**
   * do not use
   */
  @Get('flavors')
  findFlavors() {
    return 'This action returns all coffees flavors';
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  /**
   * do not use
   * @param body
   */
  @Post('name')
  createName(@Body('name') body) {
    return body;
  }

  /**
   * do not use
   * @param body
   */
  @Post('http')
  @HttpCode(HttpStatus.GONE)
  createHttp(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }
}
