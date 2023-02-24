import { Request, Response } from 'express';
import axios from 'axios';

export class UserController {
    public static async getCountries(req: Request, res: Response) {
        const options = {
            method: 'GET',
            url: 'https://countries-cities.p.rapidapi.com/location/country/list',
            params: {format: 'json'},
            headers: {
                'X-RapidAPI-Key': 'pu2xgxafMgmshh6rLO0pILv37HRcp1teR9TjsnPu1ROliNxfUN',
                'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        res.json(response.data);
    }

    static async getUsers(req: Request, res: Response) {
        try {
            // Perform your user-related database queries here

            // Return a successful response
            res.status(200).json({
                message: 'Successfully retrieved users',
                data: [{ id: 1, username: 'user1' }, { id: 2, username: 'user2' }]
            });
        } catch (error) {
            // Return an error response
            res.status(500).json({
                message: 'An error occurred while retrieving users',
                error
            });
        }
    }
}
