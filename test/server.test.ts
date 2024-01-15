import { describe, it, expect } from 'vitest';
import { server } from '../src/server';

describe('Server', () => {
    it ('works', () => {
        const hostname = '127.0.0.1';
        const port = 3000;
        return new Promise((resolve, reject) => {
            server.listen(port, hostname, async () => {
                try {
                console.log('we listen');
                const res = await fetch(`http://${hostname}:${port}`);
                const text = await res.text();
                expect(res.status).toEqual(200);
                expect(text).toEqual('Hello World\n');
                console.log('we resolve');
                resolve(true);
                } catch (e) {
                    reject(e);
                }
            });
        });
       
    });
})