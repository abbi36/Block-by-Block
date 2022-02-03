import input from 'input';

function clean(resp) {
    return resp.startsWith('y');
    console.log(clean.startsWith('y', 'Y'));
}

async function main() {
    const resp = await input.text('Do you want to finish?');
    const isFinished = clean(resp);

    if (isFinished) {
        console.log('Done');
        } else {
            console.log('Not done.')
        }
    }

main();